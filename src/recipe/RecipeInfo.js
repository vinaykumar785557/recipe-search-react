import classes from './RecipeInfo.module.css';
import React from 'react';

function RecipeInfo({ recipe }) {
	return (
		<div className={classes.recipeInfo}>
			<img
				className={classes.recipeInfo__image}
				src={recipe['recipe']['image']}
				alt={recipe['recipe']['label']}
			/>
			<p className={classes.recipeInfo__name}>{recipe['recipe']['label']} </p>
		</div>
	);
}

export default RecipeInfo;
