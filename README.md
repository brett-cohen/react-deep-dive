# Events
React elements handle events similarly to DOM elements you would see in HTML. A major difference is that React
uses [SyntheticEvents](https://reactjs.org/docs/events.html) rather than native events. These behave very 
similarly, but SyntheticEvents provide better cross-browser compatibility.

We use a component's props to define the action that should be taken when a certain event is fired off. For 
example in `events.jsx`, we define `onClick` and `onChange` on a button and input field respectively. We also
are able to pass input from the event (in this case, text entered into an input field) to our custom function.
You can see all of the different types of events available on the [React docs events page](https://reactjs.org/docs/events.html).
