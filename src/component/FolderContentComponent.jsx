import React, { Component } from 'react';
import AvailableFoldersService from '../service/AvailableFoldersService';

class FolderContentComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            assets: []
        }
    }

    componentDidMount() {
        AvailableFoldersService.retrieveFolderContent(this.state.id).then(response => this.setState({
            assets: response.data.assets
        }))
    }

    render() {
        let { assets, id } = this.state
        return (
            <div className="main-container">
                <h3>Content of folder (id = {id})</h3>
                <div className="table-container">
                    <ul>
                        <li>ID = {id}</li>
                        {
                            this.state.assets.map((asset, assetIndex) =>
                                <li>Asset #{assetIndex}
                                    <ul>
                                        {asset.attributes.map((attribute, attrIndex) =>
                                            <li>Attribute #{attrIndex}
                                                <ul>
                                                    <li><b>group:</b> {attribute.group}</li>
                                                    <li><b>name:</b> {attribute.name}</li>
                                                    <li><b>value:</b> {attribute.value}</li>
                                                </ul>
                                            </li>
                                        )
                                        }
                                        <li>Base
                                            <ul>
                                                <li><b>id:</b> {asset.base.id}</li>
                                                <li><b>type:</b> {asset.base.type}</li>
                                            </ul>
                                        </li>
                                        <li><b>mobId:</b> {asset.mobId}</li>
                                        <li>Common
                                            <ul>
                                                <li><b>created:</b> {asset.common.created}</li>
                                                <li><b>modified:</b> {asset.common.modified}</li>
                                                <li><b>name:</b> {asset.common.name}</li>
                                            </ul>
                                        </li>
                                        {asset.mediaItems && asset.mediaItems.map((mediaItem, itemIndex) =>
                                            <li>Media item #{itemIndex}
                                                <ul>
                                                    <li><b>essenceType:</b> {mediaItem.essenceType}</li>
                                                    <li><b>track:</b> {mediaItem.track}</li>
                                                    <li><b>start:</b> {mediaItem.start}</li>
                                                    <li><b>length:</b> {mediaItem.length}</li>
                                                    <li><b>mobId:</b> {mediaItem.mobId}</li>
                                                    <li><b>online:</b> {mediaItem.online}</li>
                                                    <li><b>type:</b> {mediaItem.type}</li>
                                                </ul>
                                            </li>
                                            )
                                        }
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default FolderContentComponent