import type { PageLoad } from './$types';
import imgContentAll from '$lib/data/img_info.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {

	const { slug } = params;
	const [topic, yearString] = slug.split('_');
	const year = Number(yearString);
	
		let imgContent = imgContentAll.info.find((item) => item.image === slug);

		if (imgContent?.title_de) {
			imgContent.title_de = await parse(imgContent.title_de);
		}
		if (imgContent?.title_fr) {
			imgContent.title_fr = await parse(imgContent.title_fr);
		}
		if (imgContent?.text_de) {
			imgContent.text_de = await parse(imgContent.text_de);
		}
		if (imgContent?.text_fr) {
			imgContent.text_fr = await parse(imgContent.text_fr);
		}
		if (imgContent?.source_de) {
			imgContent.source_de = await parse(imgContent.source_de);
		}
		if (imgContent?.source_fr) {
			imgContent.source_fr = await parse(imgContent.source_fr);
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
}) satisfies PageLoad;
