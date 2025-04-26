import type { PageLoad } from './$types';
import anderswoContentAll from '$lib/data/anderswo.json';
import imgContentAll from '$lib/data/img_info.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const { slug } = params;
	const [topic, yearString] = slug.split('_');
	const year = Number(yearString);
	let anderswoContent = anderswoContentAll.find((item) => item.Jahr === year && item.Titel === topic);
	
	
	if (anderswoContent) {
		if (anderswoContent?.Eckdaten) {
			anderswoContent.Eckdaten = await parse(anderswoContent.Eckdaten);
		}
		if (anderswoContent?.Titel) {
			anderswoContent.Titel = await parse(anderswoContent.Titel);
		}
		if (anderswoContent?.Text) {
			anderswoContent.Text = await parse(anderswoContent.Text);
		}
		return {
			type: 'anderswo',
			year,
			topic,
			detailContent: anderswoContent
		};
	} else {
		let imgContent = imgContentAll.info.find((item) => item.Bild === slug);
		if (imgContent?.Metatext) {
			imgContent.Metatext = imgContentAll.metatext[imgContent.Metatext - 1];
		}
		if (imgContent?.Eckdaten) {
			imgContent.Eckdaten = await parse(imgContent.Eckdaten);
		}
		if (imgContent?.Titel) {
			imgContent.Titel = await parse(imgContent.Titel);
		}
		if (imgContent?.Text) {
			imgContent.Text = await parse(imgContent.Text);
		}
		if (imgContent) {
			return {
				type: 'img',
				year,
				topic,
				detailContent: imgContent
			};
		} else {
			return {
				type: 'not-found'
			};
		}
	}
}) satisfies PageLoad;
