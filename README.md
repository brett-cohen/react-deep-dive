# Lifecycle
React components undergo a specific lifecycle as follows:
1. Mounting
2. Updating
3. Unmounting

At each stage of this lifecycle, we can inject our own logic. While there are other methods, the most important
are as follows:

| Method                    | Lifecycle Stage   | When it Occurs                                                                                                 |
|---------------------------|-------------------|----------------------------------------------------------------------------------------------------------------|
| `constructor()`           | Mounting          | Component is initiated                                                                                         |
 | `componentDidMount()`     | Mounting          | Component is created and mounted                                                                               |
| `shouldComponentUpdate()` | Updating          | Any change to state or props                                                                                   |
| `render()`                | Mounting/Updating | Any change that would cause a re-render including initial mount, can be prevented by `shouldComponentUpdate()` |
| `componentDidUpdate()`    | Updating          | After any update, can be prevented by `shouldComponentUpdate()`                                                | 
| `componentWillUnmount()`  | Unmounting        | Right before component is unmounted and destroyed                                                              |

The benefits of using these methods is fairly straightforward. 
- In `componentDidMount()`, we can do any necessary first time setup.
- The Updating methods are useful for handling changes in data and if a re-render should occur.
- In `componentWillUnmount()`, we can do any necessary cleanup to preserve system integrity.

Like state, lifecycle methods are available to class components. The full list of methods can be found on the
[React docs component page](https://reactjs.org/docs/react-component.html).

See `classLifecycle.jsx`.

## Lifecycle Hooks
Much like state, we can use hooks to hook into lifecycle methods that would be otherwise unavailable to function
components. In this case, we use an effect hook via `useEffect()`. `useEffect()` runs after every render, including the initial one.
Thus, it can be used similar to `componentDidMount()` and `componentDidUpdate()`. We can also return an optional
cleanup function in the effect hook, which will be run when the component unmounts, similar to `componentWillUnmount()`.

See `functionLifecycle.jsx`. Note that this component is essentially identical to `classLifecycle.jsx`.
