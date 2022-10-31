# Elements and Components

## Elements
Elements are the smallest units of React. A React element is similar to an HTML element, in that it consists of 
a pair of tags that represent something to be rendered in the UI. The key difference is that React elements are plain
objects, managed by React DOM.

Elements themselves are immutable. If a change has occurred that needs to be reflected in the UI, the element will be
re-rendered. However, only the element that needs to change will be updated. Given the previous state, React DOM will
apply only the DOM changes to get the DOM to the new state and no more. 

See `example.jsx` for a simple element, as well as an element that will be re-rendered every second.

## Components
While elements are the building blocks, components are the templates that tie those blocks together and make them reusable. Components 
consist of an arbitrary number of elements.

Furthermore, you can compose multiple components by referring to other components in the output of one component.

See `example.jsx` for two components, one which composes another component.

## Props
Components also except arbitrary input known as props. Props play an important role in reusability, as they allow you to 
use a generic component and supply the data required in different scenarios.

The key to writing good, reusable React code is to create generic, data-agnostic components and supply them
with the proper data via props.

See `exampleWithProps.jsx`

  
<br/>  
  
[Back to home](https://github.com/brett-cohen/react-deep-dive/tree/main)

[Next Topic: Class vs Function Components](https://github.com/brett-cohen/react-deep-dive/tree/class-vs-function-components)
