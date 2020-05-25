import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    display: "inline-block",
    position: "relative",
    left: "80%",
    transform: "rotate(45deg)"
  },
});


function Recipy ({results}) {

  const classes = useStyles();

  return(
    <div>
      {results && results.map(el =>
      <a key={el.title} href={el.href} target="_blank" rel="noopener noreferrer">
        <Paper>
          {(el.ingredients.includes("milk") || el.ingredients.includes("cheese")) && <Typography variant="h6" className={classes.label}>Has Lactose</Typography>}
          <img alt={el.title} src={el.thumbnail}></img>
            <p>Name: {el.title}</p>
            <p>Ingredients: {el.ingredients}</p>
        </Paper>
      </a>
      )}
    </div>
  )
}

export default Recipy;