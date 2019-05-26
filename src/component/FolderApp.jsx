import React, { Component } from 'react';
import AvailableFoldersComponent from './AvailableFoldersComponent';

class FolderApp extends Component {
    render() {
        return (<>
            <h1>Front for MyRestAPI</h1>
            <AvailableFoldersComponent />
        </>
        )
    }
}

export default FolderApp