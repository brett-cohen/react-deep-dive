import React from 'react';
import ReactDOM from 'react-dom';

const element = <p>This is an element</p>;

function SimpleComponent() {
    return (
        <div>
            {element}
            <p> This is another element composed inside in the same component</p>
            <p> This is an element with changing data, so it will be re-rendered: {new Date().toLocaleTimeString()}</p>
        </div>
    );
}

function ComposedComponent() {
    return (
        <div>
            <SimpleComponent/>
            <SimpleComponent/>
        </div>
    );
}

ReactDOM.render(
    <ComposedComponent/>
);

setInterval(SimpleComponent, 1000);