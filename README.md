# State
State represents data that is persisted (as long as the component is mounted) and exists within the component. 
Components are responsible for their own state. We can make changes to the state which can then be represented
as desired in the UI. This allows components to be completely reusable, as the data can be dynamically updated.

Remember that class based components have access to state and lifecycle methods. See `classState.jsx` for an example.

## Some Pitfalls
State should not be changed directly, as it will not re-render a component. `setState` should always be used.

State updates may be asynchronous.

Updates to state are merged into the existing state object. A state object can have multiple independent 
variables. When calling `setState` for one variable, the others will not be changed.

Data is unidirectional. Only components "below" other components can know about data (passed through their props).
Those children components also don't know if that data is stateful or not, just what the data is. Since the 
original component remains in charge of its state, encapsulation is maintained.

## State Hooks
Hooks are special functions that "hook" into React functionality that would normally only be accessible to 
class components. For example, we can use `useState` to give state to our function component. Hooks mitigate
the downside that function components would normally have of not being able to use this functionality.

See `functionState.jsx`.

## State Management
State across a web app can become considerably complex. Though out of the scope for this discussion, state 
management tools such as [Redux](https://redux.js.org/) and [MobX](https://mobx.js.org/README.html) allow for
more robust state management across the entire app, rather than in each component.