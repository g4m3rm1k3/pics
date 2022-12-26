import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import SearchImages from './api';

function App() {
	const [images, setImages] = useState([]);
	async function handleSubmit(term) {
		const result = await SearchImages(term);
		setImages(result);
	}
	return (
		<div style={{ backgroundColor: 'gray', margin: 0, padding: 0 }}>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList removeImages={setImages} images={images} />
		</div>
	);
}
export default App;
