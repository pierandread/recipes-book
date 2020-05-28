import React from 'react';
import { render } from '@testing-library/react';
import Recipe from '../components/Recipe/Recipe';

test('renders title inside Recipe component', () => {
  const fakeRecipe = {
    href: "http://www.grouprecipes.com/2910/kahla-cooler.html",
    ingredients: "milk",
    thumbnail: "http://img.recipepuppy.com/145911.jpg",
    title: "Kahla Cooler Recipe"
  }
  const { getByText } = render(<Recipe recipe={fakeRecipe} idx={0} />);
  const title = getByText("Kahla Cooler Recipe");
  expect(title).toBeInTheDocument();
});