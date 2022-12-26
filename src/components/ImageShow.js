import { useState } from 'react';

function ImageShow({ image }) {
	const [like, setLike] = useState(false);

	const handleClick = (e) => {
		setLike(!like);
	};
	return (
		<div
			onClick={handleClick}
			style={{
				width: '45%',
				border: '1px solid black',
				boxSizing: 'border-box',
				margin: '2% 2% 0 2%',
				padding: '5px',
				backgroundColor: 'black',
				color: 'gray',
				borderRadius: '30px',
			}}
		>
			<img
				src={image.urls.full}
				style={{
					width: '100%',
					margin: 'auto',
					borderRadius: '20px  20px 0 0',
				}}
				alt={image.alt}
			/>
			<p
				style={{
					border: '1px solid black',
					width: '90%',
					height: '50px',
					padding: '10px',
				}}
			>
				{image.alt_description}

				<svg
					style={{
						width: '90%',
						position: 'relative',
						left: '90%',
						bottom: '0',
					}}
				>
					<path
						d="M199.326,44.459c-11.27-57.967-81.908-58.936-99.326-4.746
		C82.582-14.476,11.942-13.508,0.674,44.459C-9.551,97.051,100,180.024,100,180.024S209.55,97.051,199.326,44.459z"
						style={{
							scale: '20%',
							fill: like ? 'red' : 'gray',
						}}
					/>
				</svg>
			</p>
		</div>
	);
}
export default ImageShow;
