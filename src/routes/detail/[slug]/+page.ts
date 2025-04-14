import type { PageLoad } from './$types';
import anderswo from '$lib/data/anderswo.json';
import imgInfo from '$lib/data/img_info.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const { slug } = params;
	const [topic, yearString] = slug.split('_');
	const year = Number(yearString);
	const anderswoData = anderswo.find((item) => item.Jahr === year && item.Titel === topic);
	
	
	if (anderswoData) {
		if (anderswoData?.Eckdaten) {
			anderswoData.Eckdaten = await parse(anderswoData.Eckdaten);
		}
		if (anderswoData?.Titel) {
			anderswoData.Titel = await parse(anderswoData.Titel);
		}
		if (anderswoData?.Text) {
			anderswoData.Text = await parse(anderswoData.Text);
		}
		return {
			type: 'anderswo',
			year,
			topic,
			content: anderswoData
		};
	} else {
		const imgData = imgInfo.info.find((item) => item.Bild === slug);
		if (imgData?.Metatext) {
			imgData.Metatext = imgInfo.metatext[imgData.Metatext - 1];
		}
		if (imgData?.Eckdaten) {
			imgData.Eckdaten = await parse(imgData.Eckdaten);
		}
		if (imgData?.Titel) {
			imgData.Titel = await parse(imgData.Titel);
		}
		if (imgData?.Text) {
			imgData.Text = await parse(imgData.Text);
		}
		if (imgData) {
			return {
				type: 'img',
				year,
				topic,
				content: imgData
			};
		} else {
			return {
				type: 'not-found'
			};
		}
	}
}) satisfies PageLoad;
