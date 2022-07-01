import React, {useState} from 'react';

function StatefulComponent() {
    // useState "hooks" into React's state functionality so that we can use it in our functional component
    const [message, setMessage] = useState("");

    return (
        <div>
            <input
                type={"text"}
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}/>
            <p>You typed: {message}</p>
        </div>
    )
}