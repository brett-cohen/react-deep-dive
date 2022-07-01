import React, {useState, useEffect} from 'react';

async function getDataFromBackend() {
    // Pretend this makes a call to an external service
    await new Promise(r => setTimeout(r, 5000));
    return "Goodbye!";
}

function cleanUp() {
    console.log("Cleaning up");
}

function StatefulComponent() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        getDataFromBackend().then((payload) =>{
            setMessage(payload)
        });

        return cleanUp;
    });

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