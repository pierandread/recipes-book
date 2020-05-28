import React from 'react';
import { render, fireEvent, queryByAttribute, waitForDomChange } from '@testing-library/react';
import Search from '../components/Search/Search';
import {getRecipies} from '../services/recepypuppyCall';


jest.mock('../services/recepypuppyCall.js');
const fakeApiRequest = Promise.resolve({});
getRecipies.mockImplementation(() => fakeApiRequest);

afterEach(() => {
  jest.clearAllMocks();
});

test('it should call getRecipes if Enter key is enter', () => {
  const {getByLabelText, getByTestId} = render(<Search setRecipes={jest.fn()} setLoading={jest.fn()}/>);
  const searchLabel = getByLabelText("Search")
  fireEvent.change(searchLabel, { target: { value: 'onions' } });
  const input = getByTestId("input-text");
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 } )
  expect(getRecipies).toHaveBeenCalledTimes(1)
});

test('it should call getRecipes if icon button clicked', () => {
  const {getByLabelText, getByTestId} = render(<Search setRecipes={jest.fn()} setLoading={jest.fn()}/>);
  const searchLabel = getByLabelText("Search")
  fireEvent.change(searchLabel, { target: { value: 'onions' } });
  const icon = getByTestId("icon");
  fireEvent.click(icon)
  expect(getRecipies).toHaveBeenCalledTimes(1)
});