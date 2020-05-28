# Dependencies: 

The app is built using create-react-app.
Added: Material-UI, Cypress, testing-library/react to use with Jest, npm-run-all to write test:e2e:start script and testing-library/cypress for future implementation with Cypress.

# React-structure: 

In the main component `App` we have: 

* Mui Theme to have the breaking point at 768px for the Grid.
* Two states recipies and loading shared between Search and Recipes (for a bigger project I would have used Redux or React-Context).

The API call is inside the `service` folder. The rightInputs function could be moved inside the Search component if needed, but I wanted to split the logic inside the same file. 

The `Recipes` component is managing three different states: 
* if loading will show a Loading p (possible to implement in the future a spinner)
* if recipies but it doesn't have results, it will show a `No result`
* if recipies with results, it will load the Recipe component with a .map.

The `Recipe` component will load all the single information of the single component (including the "Has Lactose" label). I was thinking into split in additional child components, but at the current status the logic is pretty linear, so I will probably do if there will be more things to show. 
This component is the more heavy styled with a nested Grid, we could potentially implement different solutions, but I decide to proceed like this in case the requirements will change and it will more complex. 

I used different type of styling to practice with them, in a "production" kind of application, I would have chosen for one and refractory all the other in line with my decision.

# Tests-structure: 

`Jest` tests are controlling that the components are rendering correctly considering the properties passed and checking if the functions are returning the expected results or if they are being called.
`Cypress` ones are focusing on simulating a user search to visualize any problems that could arise. 


