import { useEffect, useRef } from 'react';
import { ComicAdProps, SizedComicAdProps } from "./ComicAd.d";
import styles from './ComicAd.module.scss';
import { overridable } from '@core/lib/overridable';

export const ComicAdComponent = overridable(({code, width, height}:ComicAdProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// Clear previous content (in case code changes)
		el.innerHTML = '';

		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = `https://www.comicad.net/r/${code}/`;
		script.async = true; // or: script.defer = true;
		el.appendChild(script);

		return () => {
			// Cleanup on unmount or when code changes
			el.innerHTML = '';
		};
	}, [code]);

	return <div className={styles.ad} ref={containerRef} style={{width, height}}/>;
});

export const SizedComicAdComponent = (width:number, height: number) => (props: SizedComicAdProps) => 
    <ComicAdComponent {...props} width={width} height={height} />;