import React from 'react';
import { render, fireEvent, queryByAttribute, waitForDomChange } from '@testing-library/react';
import Search from '../components/Search/Search';
import {getRecipies} from '../services/recepypuppyCall';


jest.mock('../services/recepypuppyCall.js');
const fakeApiRequest = Promise.resolve({
  // secure_url: 'https://example.com/'
});
getRecipies.mockImplementation(() => fakeApiRequest);

test('renders navTitle in NavBar component', async () => {
  const getById = queryByAttribute.bind(null, 'id');
  const {container} = render(<Search setRecipes={{}} />);
  const searchInput = getById(container, "search-input");
  searchInput.value = "onions";
  fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
  await expect(getRecipies).toHaveBeenCalledTimes(1)
  
});
