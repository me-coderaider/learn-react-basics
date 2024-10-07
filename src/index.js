// Component creation and to display it on UI is a 5-step process which is following:

// 1. Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2. Get a reference to the div with id=root
const rootEl=document.getElementById('root');

// 3. Tell React to take control of that div
// i.e Create a react-root element inside that div using createRoot() function
const root=ReactDOM.createRoot(rootEl);

// 4. Create a component
function App(){
    return <h1>Be Creative</h1>
}

// 5. Render App inside the root-element
// or Show the component on the screen
root.render(<App/>);