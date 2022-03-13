import './App.css';

function App() {
	return (
		<div className='app'>
			<h1>
				<u>Food Recipe Search</u>
			</h1>

			<div className='app__searchForm'>
				<input
					type='text'
					className='app__input'
					placeholder='type something'
					autoComplete='Off'></input>

				<select className='app__healthLabels'>
					<option value='vegan'>vegan</option>
				</select>

				<input type='submit' value='Get Recipe' className='app__submit'></input>
			</div>
		</div>
	);
}

export default App;
