import React, {useState} from "react";

function NewTask() {

    const [text, setText] = useState("");

    function handleSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId: 1, title: text})
        };
        fetch('/todos', requestOptions)
            .then(response => response.json())
    }

    return (
        <div>
            <h1 className="titleLabel">TITLE</h1>
            <input type="text" className="titleText" value={text} onChange={(event) => setText(event.target.value)}/>
            < button className="sendButton" onClick={handleSubmit}>Send</button>
        </div>
    )
}


export default NewTask;