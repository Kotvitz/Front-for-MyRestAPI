import React, { Component } from 'react';
import AvailableFoldersService from '../service/AvailableFoldersService';

class AvailableFoldersComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            folders: []
        }
        this.refreshFolders = this.refreshFolders.bind(this)
    }

    componentDidMount() {
        this.refreshFolders();
    }

    refreshFolders() {
        AvailableFoldersService.retrieveAllFolders().then(response => {
            console.log(response);
            this.setState({ folders: response.data })
        })
    }

    render() {
        return (
            <div className="main-container">
                <h3>All available folders</h3>
                <div className="table-container">
                    <table className="folder-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Path</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.folders.map(
                                    folder =>
                                        <tr key={folder.id}>
                                            <td>{folder.id}</td>
                                            <td>{folder.path}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AvailableFoldersComponent