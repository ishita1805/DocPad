import React from 'react';
import Nav from './Components/Nav/Nav';
import { Switch, Route } from 'react-router';
import Home from './Containers/Home/Home'
import Patients from './Containers/Patients/Patients'
import Prescription from './Containers/Prescription/Prescription'
import Profile from './Containers/Profile/Profile'
import Settings from './Containers/Settings/Settings'
import ViewPrescription from './Containers/Prescription/ViewPrescription';
import { PatientProvider } from './Context/Patient'
import TaskManager from './Containers/TaskManager/TaskManager';

const App = () => {
    return (
        <div class='app'>
        <Nav>
            <Switch>
                <PatientProvider>
                    <Route path="/" exact><Home/></Route>
                    <Route path="/patients" exact><Patients/></Route>
                    <Route path="/prescription" exact><Prescription/></Route>
                    <Route path='/prescription-view' exact><ViewPrescription/></Route>
                    <Route path="/profile" exact><Profile/></Route>
                    <Route path="/settings" exact><Settings/></Route>
                    <Route path="/taskmanager" exact><TaskManager/></Route>
                </PatientProvider>
                </Switch>
        </Nav>
        </div>
    );
}


// import sendAsync from './api/renderer';

// function App() {
//     const [message, setMessage] = useState('SELECT TIME() as time, DATE() as date');
//     const [response, setResponse] = useState();

//     const send = (sql) => {
//         sendAsync(sql)
//             .then((result) => setResponse(result));
//     }

//     return (
//         <div>
//             <h1>Standalone application with Electron, React, and SQLite stack.</h1>

//             <p> Say <i>ping</i> to the main process.</p>
            
//             <input
//             type="text"
//             value={message}
//             onChange={({ target: { value } }) => setMessage(value)}
//             />
            
//             <button type="button" onClick={() => send(message)}>Send</button>
            
//             <p>Main process responses:</p>
          
//             <pre>
//                 {(response && JSON.stringify(response, null, 2)) ||
//                     'No query results yet!'}
//             </pre>
//         </div>
//     );
// }

export default App;
