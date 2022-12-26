import { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [term, setTerm] = useState('');
	const [terms, addTerms] = useState([]);

	const handleClick = (event) => {
		event.preventDefault();
		if (term) {
			onSubmit(term);
			addTerms([...terms, term]);

			setTerm('');
		}
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	const renderedTerms = terms.map((term, id) => (
		<li
			onClick={() => {
				onSubmit(term);
			}}
			key={id}
		>
			{term}
		</li>
	));

	return (
		<div>
			<form onSubmit={handleClick}>
				<p style={{ fontWeight: 800 }}>Search for {term}</p>
				<input
					onChange={handleChange}
					value={term}
					placeholder="search term"
				></input>
			</form>
			<ol>{renderedTerms}</ol>
		</div>
	);
}
export default SearchBar;
