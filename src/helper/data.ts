export interface ImageData {
	id: number;
	title: string;
	url: string;
}

export const images: ImageData[] = [];

for (let i = 1; i <= 30; i++) {
	images.push({
		id: i,
		title: `Random Title ${i}`,
		url: `https://picsum.photos/200/300?random=${i}`,
	});
}
