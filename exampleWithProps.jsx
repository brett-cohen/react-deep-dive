import React from 'react';
import ReactDOM from 'react-dom';

const element = <p>This is an element</p>;

function SimpleComponent(props) {
    return (
        <div>
            {element}
            <p> This is another element composed inside in the same component</p>
            <p> This is an element with a prop passed in: {props.message}</p>
        </div>
    );
}

ReactDOM.render(
    <SimpleComponent
        message={"Hello!"}
    />
);