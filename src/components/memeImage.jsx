import React, { Component } from 'react';

class MemeImage extends Component {
    state = {}
    render() {
        return (
            <div className="div-main">
                <div className="container">
                    <img src={this.props.imageURL} alt="" className="image-meme" ></img>
                    <p className="text-header">{this.props.header}</p>
                    <p className="text-footer">{this.props.footer}</p>
                </div>
            </div>
        );
    }

}
MemeImage.defaultProps = {
    header: "Header",
    footer: "Footer"
}

export default MemeImage;