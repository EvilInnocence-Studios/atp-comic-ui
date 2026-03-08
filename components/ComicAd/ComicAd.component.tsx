import { useEffect, useRef } from 'react';
import { ComicAdProps, SizedComicAdProps } from "./ComicAd.d";
import styles from './ComicAd.module.scss';
import { overridable } from '@core/lib/overridable';
import { Link } from 'react-router';
import { MediaImage } from '@common/components/MediaImage';
import clsx from 'clsx';

export const ComicAdComponent = overridable(({
	code, width, height, defaultAdId, defaultAdLink,
	classes = styles, className, css,
}: ComicAdProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// Clear previous content (in case code changes)
		el.innerHTML = '';

		// Cleanup ComicAd global variables that prevent re-rendering on navigation
		// The ComicAd script leaves global variables (like cad2075 and cadi) in the window 
		// object, which tricks its internal duplicate-check into skipping render on subsequent visits.
		Object.keys(window).forEach((key) => {
			if (/^cad\d+$/.test(key) || key === 'cadi') {
				try {
					delete (window as any)?.[key];
				} catch (e) {
					// Fallback to setting it to undefined if delete fails (e.g. strict mode or non-configurable)
					(window as any)[key] = undefined;
				}
			}
		});

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

	return <>
		<style>{css}</style>
		<div className={clsx(classes.ad, className)} ref={containerRef} style={{ width, height }}>
			{defaultAdId && <Link to={defaultAdLink || ""}>
				<MediaImage imageId={defaultAdId} />
			</Link>}
		</div>
	</>;
});

export const SizedComicAdComponent = (width: number, height: number) => (props: SizedComicAdProps) =>
	<ComicAdComponent {...props} width={width} height={height} />;