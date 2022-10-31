# Class vs Function Components

While the previous examples showed components as functions, they can also be written as classes.

See `functionComponent.jsx` and `classComponent.jsx`. As far as React is concerned, these two files are exactly the same.

There are pros and cons to using one or the other style. Function components are simple and fit in well with JavaScript's
functional programming. Class components give you access to React's lifecycle methods and local state (covered more in detail later),
however it's worth noting that hooks (also covered later) allow you access to the same functionality.

Overall I'm partial to function components due to JavaScript's functional nature, but the important thing is
consistency and agreement across the team on which style to use.

  
<br/>  
  
[Back to home](https://github.com/brett-cohen/react-deep-dive/tree/main)

[Next Topic: Events](https://github.com/brett-cohen/react-deep-dive/tree/Events)
