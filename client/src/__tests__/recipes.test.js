import React from 'react';
import { render } from '@testing-library/react';
import Recipes from '../components/Recipes/Recipes';

const fakeRecipes = [{
  href: "http://www.grouprecipes.com/2910/kahla-cooler.html",
  ingredients: "milk, onions",
  thumbnail: "http://img.recipepuppy.com/145911.jpg",
  title: "Kahla Cooler Recipe"
  }, {
    "title": "Roasted Pepper and Bacon Omelet",
    "href": "http://www.bigoven.com/43919-Roasted-Pepper-and-Bacon-Omelet-recipe.html",
    "ingredients": "eggs, salt, black pepper, butter, black pepper, bacon, onions, garlic, roasted red peppers, oregano, black pepper",
    "thumbnail": ""
  }];

test('renders no results if recipes is empty', async () => {
  const { findByText } = render(<Recipes recipes={[]} />);
  const noResult = await findByText("No results, try another search");
  expect(noResult).toBeInTheDocument();
});

test('renders recipes if recipes is present', () => {
  const { getByText } = render(<Recipes recipes={fakeRecipes} />);
  for (let i =0 ; i<fakeRecipes.length; i++){
    let titleResults = getByText(fakeRecipes[i].title);
    expect(titleResults).toBeInTheDocument();
  }
});

test('renders loading... if loading state is true', () => {
  const { getByText } = render(<Recipes loading={true} />);
  const loadingText = getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});


