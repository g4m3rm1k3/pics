import ImageShow from './ImageShow';

function ImageList({ images, removeImages }) {
	const renderedImages =
		images.length > 0
			? images.map((img) => <ImageShow image={img} key={img.id} />)
			: 'Search for Images';
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				width: ' 100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{renderedImages}
		</div>
	);
}
export default ImageList;
