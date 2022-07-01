import React from 'react';

function EventComponent() {
    return (
        <button onClick={() => {console.log("Hello!")}}>Click me</button>
    );
}

function InputEventComponent() {
    return (
      <input type={"text"} onChange={(e) => {console.log(e.target.value)}}/>
    );
}