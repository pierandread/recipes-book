import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  label: {
    transform: "rotate(45deg)",
    display: "inline-block",
    position: "relative",
    top: "40px",
    left: "10px"
  },
  recipe: {
    position: "relative",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    marginRight: "2%",
    marginBottom: "2%",
    "&:hover": {
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
    }
  },
  link: {
    textDecoration: "none",
    color: "black"
  },
  image: {
    borderRadius: "5px",
    boxShadow: "1px 1px 1px"
  }
});

function Recipe ({recipe, idx}) {

  const classes = useStyles();
  return (
    <Grid key={idx} item xs={10} md={5} className={classes.recipe}>
      <a className={classes.link} href={recipe.href} target="_blank" rel="noopener noreferrer">
        <Grid spacing={1} container={true}>
          <Grid item xs={6}>
            <img alt={recipe.title} src={recipe.thumbnail} className={classes.image} />
          </Grid>
          <Grid item xs={6} align="right">
            {(recipe.ingredients.includes("milk") || recipe.ingredients.includes("cheese")) && <Typography variant="h6" className={classes.label}>Has Lactose</Typography>}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name:</Typography>
            <Typography variant="body2" > {recipe.title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" >Ingredients: </Typography>
          </Grid>
          <Grid item xs={12} style={{paddingTop: "0"}}>
            <List dense={true} style={{paddingTop: "0"}}>
              {recipe.ingredients && recipe.ingredients.split(",").map((ingredient, idx) => <ListItem key={idx} ><Typography variant="body2">- {ingredient}</Typography></ListItem>)}
            </List>
          </Grid>
        </Grid>
      </a>
    </Grid>
  )
}

export default Recipe;