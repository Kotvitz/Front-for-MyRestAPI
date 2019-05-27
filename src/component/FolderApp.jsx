import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import AvailableFoldersComponent from './AvailableFoldersComponent';
import FolderContentComponent from './FolderContentComponent';

class FolderApp extends Component {
    render() {
        return (
            <Route>
                <>
                    <h1>Front for MyRestAPI</h1>
                    <Switch>
                        <Route path="/" exact component={AvailableFoldersComponent} />
                        <Route path="/:id" component={FolderContentComponent} />
                    </Switch>
                </>
            </Route>
        )
    }
}

export default FolderApp