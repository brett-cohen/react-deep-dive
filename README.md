# Higher-Order Components
Higher-Order Components are a design pattern that enable even more reusable component logic. A higher-order component
takes a component and transforms it into another one by composing it with another component. 

This may sound complicated, so let's talk through an example. Say you have an app with multiple buttons that open
various popup menus. Obviously you can't just tie the button directly to a menu because the menus are different. So 
to facilitate code reuse, we can create a button HOC with all the logic for opening and closing menus. Then,
we can make that button accept a menu component as an argument and be mounted/rendered alongside that button. The 
open/close logic is general enough that the specific menu doesn't matter. Now we can use that button anywhere in
our app and pass it arbitrary menus to handle.

HOCs promote code reuse by preventing the same functionality from existing across multiple components. Additionally,
they make testing easier, as tests don't need to be rewritten for the same logic in multiple areas.

See [React docs page on HOCs](https://reactjs.org/docs/higher-order-components.html) for a great example.

## Composition vs Inheritance
It's worth discussing some of the philosophy behind React here. React favors composition over inheritance to reuse code, 
which is to say components should have `has a` relationships and not `is a` relationships. React is designed with this 
mantra in mind, and React developers should always seek to use composition over inheritance. The React docs 
have a [page discussing this](https://reactjs.org/docs/composition-vs-inheritance.html) in much better detail.


