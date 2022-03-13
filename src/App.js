import { useState } from 'react';
import './App.css';
import axios from 'axios';
import RecipeInfo from './recipe/RecipeInfo';

function App() {
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState('');
	const [healthLabel, setHealthLabel] = useState('vegetarian');

	const YOUR_APP_ID = 'e091eb96';
	const YOUR_APP_KEY = 'b4d1a4ceaef3e0223150957bc67d8a07';
	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

	const getRecipeInfo = async () => {
		let result = await axios.get(url);

		setRecipes(result.data.hits);
		// console.log(recipes);
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
					<option value='vegan' onClick={(e) => setHealthLabel('vegan')}>
						vegan
					</option>
					<option
						value='vegetarian'
						onClick={(e) => setHealthLabel('vegetarian')}>
						vegetarian
					</option>
					<option
						value='low-sugar'
						onClick={(e) => setHealthLabel('low-sugar')}>
						low-sugar
					</option>
					<option
						value='dairy-free'
						onClick={(e) => setHealthLabel('dairy-free')}>
						dairy-free
					</option>
					<option
						value='immuno-supportive'
						onClick={(e) => setHealthLabel('immuno-supportive')}>
						immuno-supportive
					</option>
					<option
						value='wheat-free	'
						onClick={(e) => setHealthLabel('wheat-free	')}>
						wheat-free
					</option>
				</select>

				<input type='submit' value='Get Recipe' className='app__submit'></input>
			</form>
			<div className='app__recipes'>
				{recipes.map((recipe) => {
					return <RecipeInfo recipe={recipe} />;
				})}
			</div>
		</div>
	);
}

export default App;
