import { images } from '../../helper/data';

export const MasonFetcher = () => {
	const results = images.map(image => {
		return {
			id: image.id,
			title: image.title,
			url: image.url,
			size: 200,
			position: 1,
		};
	});
	return results;
};
