import React from "react";
import Sidebar from "./Components/Sidebar";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-3">
                <List />
            </div>
        </div>
    );
}

export default App;
