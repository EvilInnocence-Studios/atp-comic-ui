import { ICharacterAttribute } from "@comic-shared/character/types";
import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";
import { useLoaderAsync } from "@core/lib/useLoader";
import { appendTo, clear } from "@core/lib/util";
import { useEffect, useState } from "react";
import { all, pipe, prop, sort } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { CharacterAttributeEditorComponent } from "./CharacterAttributeEditor.component";
import { CharacterAttributeEditorProps, ICharacterAttributeEditorInputProps, ICharacterAttributeEditorProps } from "./CharacterAttributeEditor.d";

const injectCharacterAttributeEditorProps = createInjector(({characterId}:ICharacterAttributeEditorInputProps):ICharacterAttributeEditorProps => {
        const [attributes, setAttributes] = useState<ICharacterAttribute[]>([]);
        const loader =  useLoaderAsync();
    
        const att = services().character.attribute;
    
        const update = (id:string, field:keyof ICharacterAttribute) => (value:any) => {
            const oldAtts = attributes;
            setAttributes(attributes.map(a => a.id === id ? {...a, [field]: value} : a));
            loader(() => att.update(characterId, id, value)
                .then(flash.success("Attribute updated"))
                .catch(all(() => setAttributes(oldAtts), flash.error("Failed to update attribute")))
            );
        }
    
        const remove = (id:string) => () => {
            const oldAtts = attributes;
            setAttributes(attributes.filter(a => a.id !== id));
            loader(() => att.remove(id, id)
                .then(flash.success("Attribute removed"))
                .catch(all(() => setAttributes(oldAtts), flash.error("Failed to remove attribute")))
            );
        }
    
        const [name, setName] = useState('');
        const [value, setValue] = useState('');
        const create = () => {
            loader(() => att.create(characterId, name, value)
                .then(appendTo(attributes))
                .then(all(
                    refresh,
                    flash.success(`Attribute ${name} created`),
                    clear(setName),
                    clear(setValue),
                ))
                .catch(flash.error("Failed to create attribute"))
            );
        }
    
        const sortAtts = (attId: string, newIndex: number) => {
            loader(() => att.sort(characterId, attId, newIndex)
                .then(refresh)
                .catch(flash.error("Failed to sort attributes"))
            );
        }
    
        const refresh = () => {
            loader(() => att.search(characterId)
                .then(pipe(sort(sort.by<ICharacterAttribute>(prop("sortOrder")).asc), setAttributes))
                .catch(flash.error("Failed to load attributes"))
            );
        };
        useEffect(refresh, [characterId]);
    
        return {
            attributes, isLoading: loader.isLoading,
            name, setName, value, setValue,
            create, update, remove, sort: sortAtts,
        };
});

const connect = inject<ICharacterAttributeEditorInputProps, CharacterAttributeEditorProps>(mergeProps(
    injectCharacterAttributeEditorProps,
));

export const CharacterAttributeEditor = connect(CharacterAttributeEditorComponent);
