import React, { Component } from 'react';

class NewArtist extends Component {
    constructor() {
        super();
        this.state = {
            NewArtist: {
                name: "",
                nationality: "",
                photo_url: "",
            }
        }
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.addArtist(this.state.NewArtist)
    }
    _handleChange = (e) => {
        const attributeValue = e.target.value;
        const attributeName = e.target.name;
        const newState = { ...this.state };
        newState.NewArtist[attributeName] = attributeValue
        this.setState(newState)
    }


    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input type="text" name="name" placeholder="artist name" onChange={this._handleChange} />
                    <input type="text" name="nationality" placeholder="nationality" onChange={this._handleChange} />
                    <input type="text" name="photo_url" placeholder="insert a url for photo" onChange={this._handleChange} />
                    <input type="submit" value="Add Artist" />
                </form>
            </div>
        );
    }
}

export default NewArtist;