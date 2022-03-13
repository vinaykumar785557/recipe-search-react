import classes from './RecipeInfo.module.css';
import React from 'react';

function RecipeInfo({ recipe }) {
	return (
		recipe['recipe']['image'].match(/\.(jpeg|jpg|gif|png)$/) != null && (
			<div className={classes.recipeInfo}>
				<img
					className={classes.recipeInfo__image}
					src={recipe['recipe']['image']}
					alt={recipe['recipe']['label']}
					onClick={() => window.open(recipe['recipe']['url'])}
				/>
				<p className={classes.recipeInfo__name}>{recipe['recipe']['label']} </p>
			</div>
		)
	);
}

export default RecipeInfo;
