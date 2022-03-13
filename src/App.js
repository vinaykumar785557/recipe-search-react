import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [recipe, setRecipes] = useState([]);
	const [query, setQuery] = useState('');

	const YOUR_APP_ID = 'e091eb96';
	const YOUR_APP_KEY = 'b4d1a4ceaef3e0223150957bc67d8a07';
	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

	const getRecipeInfo = async () => {
		let result = await axios.get(url);

		setRecipes(result.data.hits);
		console.log(recipe);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		getRecipeInfo();
	};

	return (
		<div className='app'>
			<h1>
				<u>Food Recipe Search</u>
			</h1>

			<form className='app__searchForm' onSubmit={submitHandler}>
				<input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type='text'
					className='app__input'
					placeholder='type something'
					autoComplete='Off'></input>

				<select className='app__healthLabels'>
					<option value='vegan'>vegan</option>
				</select>

				<input type='submit' value='Get Recipe' className='app__submit'></input>
			</form>
		</div>
	);
}

export default App;
