import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recipe from '../Recipe/Recipe'


const useStyles = makeStyles({
  recepies: {
    margin: "0 5%",
  },
});

function Recipes({ recipes, loading }) {

  const classes = useStyles();
  if (loading) return(<div><p className={classes.recepies}>Loading...</p></div>);
  
  return (
    <div >
      <Grid container={true} spacing={3} className={classes.recepies}>
        {recipes && recipes.map((recipe, idx) =>
          <Recipe key={idx} recipe={recipe} idx={idx} />
        )}
      </Grid>
      {(recipes && recipes.length === 0) && <p className={classes.recepies}>No results, try another search</p>}
    </div>
  )
}

export default Recipes;