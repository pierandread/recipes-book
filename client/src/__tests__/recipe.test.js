import React from 'react';
import { render } from '@testing-library/react';
import Recipe from '../components/Recipe/Recipe';

const fakeRecipe = {
  href: "http://www.grouprecipes.com/2910/kahla-cooler.html",
  ingredients: "milk, onions",
  thumbnail: "http://img.recipepuppy.com/145911.jpg",
  title: "Kahla Cooler Recipe"
} 

test('renders title inside Recipe component', () => {
  const { getByText } = render(<Recipe recipe={fakeRecipe} idx={0} />);
  const title = getByText(fakeRecipe.title);
  expect(title).toBeInTheDocument();
});

test('renders ingredients inside Recipe component', async () => {
  const { findByText } = render(<Recipe recipe={fakeRecipe} idx={0} />);
  const ingredient1 = await findByText("- milk");
  const ingredient2 = await findByText("- onions");  
  expect(ingredient1).toBeInTheDocument();
  expect(ingredient2).toBeInTheDocument();
});

test('renders image inside Recipe component with right src', () => {
  const { getByAltText } = render(<Recipe recipe={fakeRecipe} idx={0} />);
  const image = getByAltText(fakeRecipe.title);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', fakeRecipe.thumbnail);
});
