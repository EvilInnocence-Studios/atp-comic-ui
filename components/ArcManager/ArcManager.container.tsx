import { IComicArc } from "@comic-shared/arc/types";
import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { ArcManagerComponent } from "./ArcManager.component";
import { ArcManagerProps, IArcManagerInputProps, IArcManagerProps } from "./ArcManager.d";
import { useNavigate } from "react-router";

const injectArcManagerProps = createInjector(({arcId}:IArcManagerInputProps):IArcManagerProps => {
    const [arcs, setArcs] = useState<IComicArc[]>([]);
    const [isOpen, setIsOpen] = useState<Set<string>>(new Set());
    const loader = useLoaderAsync();
    const navigate = useNavigate();

    // Make sure the current arc and all parents are open
    useEffect(() => {
        if(arcId && arcs.length > 0) {
            const arc = arcs.find(a => a.id === arcId);
            if(arc) {
                const newSet = new Set(isOpen);
                let currentArc:IComicArc | undefined = arc;
                while(currentArc) {
                    newSet.add(currentArc.id);
                    currentArc = currentArc.parentId ? arcs.find(a => a.id === (currentArc as IComicArc).parentId) || undefined : undefined;
                }
                setIsOpen(newSet);
            }
        }
    }, [arcs, arcId]);

    const arc = arcId ? arcs.find(a => a.id === arcId) || null : null;

    const goToArc = (id:string) => () => {
        navigate(`/comic/arc/${id}`);
    }

    const refresh = () => {
        loader(() => services().arc.search().then(setArcs));
    }

    useEffect(refresh, []);

    const create = (parentId: string|null = null) => () => {
        loader(() => services().arc.create({
            name: 'New Arc',
            parentId,
            enabled: false,
            url: null,
            sortOrder: 0,
            thumbnailUrl: null,
            bannerUrl: null,
            summary: null
        }).then(refresh));
    }

    const remove = (id: string) => () => {
        loader(() => services().arc.remove(id).then(refresh));
    }

    const open = (id:string) => () => {
        setIsOpen(new Set(isOpen).add(id));
    }

    const close = (id:string) => () => {
        const newSet = new Set(isOpen);
        newSet.delete(id);
        setIsOpen(newSet);
    }

    return {arcs, arc, isLoading: loader.isLoading, create, remove, isOpen, open, close, goToArc, refresh};
});

const connect = inject<IArcManagerInputProps, ArcManagerProps>(mergeProps(
    injectArcManagerProps,
));

export const ArcManager = connect(ArcManagerComponent);
