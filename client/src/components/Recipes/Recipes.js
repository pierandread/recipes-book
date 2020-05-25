import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  label: {
    position: "absolute",
    left: "80%",
    top: "10%",
    transform: "rotate(45deg)"
  },
  recipe: {
    position: "relative",
    margin:"20px 0",
    padding: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  recepies: {
    margin: "0 5%",
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});

function Recipes ({recipes}) {

  const classes = useStyles();

  return(
    <div className={classes.recepies}>
      <Grid container={true} spacing={3}>
        {recipes && recipes.map((recipe, idx) =>
          <Grid key={idx} item xs ={12} md={5} className={classes.recipe}>
            <a className={classes.link} href={recipe.href} target="_blank" rel="noopener noreferrer">
              <img alt={recipe.title} src={recipe.thumbnail}/>
              {(recipe.ingredients.includes("milk") || recipe.ingredients.includes("cheese")) && <Typography variant="h6" className={classes.label}>Has Lactose</Typography>}
                <p>Name: {recipe.title}</p>
                <p style={{marginBottom: "0"}}>Ingredients: </p>
                <List dense={true}>
                  {recipe.ingredients && recipe.ingredients.split(",").map((ingredient, idx) => <ListItem key={idx}>- {ingredient}</ListItem>)}
                </List>
              </a>
          </Grid>         
        )}
      </Grid>
      {(recipes && recipes.length===0) && <p>No results, try another search</p>}
    </div>
  )
}

export default Recipes;