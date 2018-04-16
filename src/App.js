import React, {Component} from 'react';
// import TableView from './Table/table.jsx'
// import Main from "./main"
import EditableTable from './Table/AntTable'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<TableView />*/}
                {/*<Main/>*/}
                <EditableTable />
            </div>
        );
    }
}

export default App;
