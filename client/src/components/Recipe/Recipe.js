import React from 'react';
import Paper from '@material-ui/core/Paper';
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
  },
  recepies: {
    margin: "0 5%"
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
});

function Recipe ({recipes}) {

  const classes = useStyles();

  return(
    <div className={classes.recepies}>
      <Grid container={true} spacing={2}>
        {recipes && recipes.map((recipe, idx) =>
          <Grid item xs ={12} md={6}>
            <Paper key={idx} className={classes.recipe}>
            <a className={classes.link} href={recipe.href} target="_blank" rel="noopener noreferrer">
              <img alt={recipe.title} src={recipe.thumbnail}></img>
              {(recipe.ingredients.includes("milk") || recipe.ingredients.includes("cheese")) && <Typography variant="h6" className={classes.label}>Has Lactose</Typography>}
                <p>Name: {recipe.title}</p>
                <p style={{marginBottom: "0"}}>Ingredients: </p>
                <List dense={true}>
                  {recipe.ingredients && recipe.ingredients.split(",").map((ingredient, idx) => <ListItem key={idx}>- {ingredient}</ListItem>)}
                </List>
                </a>
            </Paper>
          </Grid>         
        )}
      </Grid>
      {(recipes && recipes.length===0) && <p>No results, try another search</p>}
    </div>
  )
}

export default Recipe;