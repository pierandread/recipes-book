import {rightInputs} from '../services/recepypuppyCall';

test("rightInputs throws error message if not a string", () => {
  expect(() => {
    rightInputs(3);
  }).toThrow("Wrong type of input");
  expect(() => {
    rightInputs([]);
  }).toThrow("Wrong type of input");
  expect(() => {
    rightInputs({})
  }).toThrow("Wrong type of input");
  expect(() => {
    rightInputs(null);
  }).toThrow("Wrong type of input");
})

test("rightInputs to return the right inputs for apicall", () => {
  expect(rightInputs(" onions")).toEqual("onions");
  expect(rightInputs(" onions, cheese")).toEqual("onions,cheese");
  expect(rightInputs(",.onions.cheese")).toEqual("onions,cheese");
  expect(rightInputs("onions,,  cheese!")).toEqual("onions,cheese");

})
