# Common Pitfalls
The following are a collection of some issues that stumped me when I was starting out. **This is not a comprehensive list.**

### Prop drilling

Prop drilling occurs when a value originates at a high level component and is passed down to a very low level component through several layers of props. This causes two main issues:
1. It makes the code harder to follow.
2. A component is rerendered every time its props change. This means all components between the origin of the value and the component at the lowest level will be rerendered each time the value changes. This can cause a performance hit in more extreme cases.

Solutions:
- Be more thoughtful in deciding which components own which values
- Move values that are used in several locations into a [React context](https://reactjs.org/docs/context.html) (or Redux, or MobX, or etc).
  - Secondary pitfall: Avoid putting too much into global state. That can also make the code difficult to follow.

[This article](https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/) further illustrates the problem and solutions.

### State
Covered in the [State section](https://github.com/brett-cohen/react-deep-dive/tree/state) but always worth reiterating
- You need to use setState to change state
- setState is asynchronous

### Hooks
- Not supplying a dependency to useEffect - This will cause the function to run **every time the component renders.** Make sure you want that.
- Changing a dependency in the useEffect function - This will cause an infinite loop. 

### Putting too much into one component
A good React component:
- does one thing
- is dumb (data agnostic)
- is generic/reusable
