import React, { useState } from 'react';

import sendAsync from './message-control/renderer';

function App() {
    const [message, setMessage] = useState('SELECT * FROM repositories');
    const [response, setResponse] = useState();

    const send = (sql) => {
        sendAsync(sql).
            then((result) => setResponse(result));
    }

    return (
        <div>
            <h1>Standalone application with Electron, React, and SQLite stack.</h1>

            <p> Say <i>ping</i> to the main process.</p>
            
            <input
            type="text"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            />
            
            <button type="button" onClick={() => send(message)}>Send</button>
            
            <p>Main process responses:</p>
          
            <pre>
                {(response && JSON.stringify(response, null, 2)) ||
                    'No query results yet!'}
            </pre>
        </div>
    );
}

export default App;
