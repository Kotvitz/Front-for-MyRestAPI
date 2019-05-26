import React, { Component } from 'react';

class AvailableFoldersComponent extends React.Component {
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
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default AvailableFoldersComponent