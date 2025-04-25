import type { PageLoad } from './$types';
import mainContent from '$lib/data/main.json';
import anderswoAll from '$lib/data/anderswo.json';
import { parse } from 'marked';

export const load = (async ({ params }) => {
	const currentyear = Number(params.year);
	const topic: 'Heilmann' | 'Brunnen' | 'Neuhaus' = params.topic as
		| 'Heilmann'
		| 'Brunnen'
		| 'Neuhaus';

	let topic_label;
	switch (topic) {
		case 'Heilmann':
			topic_label = 'G.&nbsp;F.&nbsp;Heilmann';
			break;
		case 'Brunnen':
			topic_label = '';
			break;
		case 'Neuhaus':
			topic_label = 'F.&nbsp;E.&nbsp;Neuhaus';
			break;
	}

	const contentIndex = mainContent[params.topic as 'Heilmann' | 'Brunnen' | 'Neuhaus'].findIndex(
		(item) => item.Jahr === currentyear
	);
	const content = mainContent[topic][contentIndex];
	const nextYear = mainContent[topic][contentIndex + 1]?.Jahr;
	const prevYear = mainContent[topic][contentIndex - 1]?.Jahr;

	const anderswo = anderswoAll.filter((item) => item.Jahr === currentyear).map((item) => item.Titel);

	if (content?.Text) {
		content.Text = await parse(content.Text);
	}

	return {
		topic,
		topic_label,
		nextYear,
		prevYear,
		content,
		anderswo
	};
}) satisfies PageLoad;
