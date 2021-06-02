import React, { Component } from 'react';
import axios from '../../node_modules/axios'
import MemeImage from "./memeImage"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: "",
            footerText: "",
            imageURL: ""
        }
        this.saveChange = this.saveChange.bind(this)
        this.updateImage = this.updateImage.bind(this)
    }
    render() {
        return (
            <div>
                <input
                    id="headerText"
                    type="text"
                    className="inputbox"
                    placeholder="Header Text"
                    onChange={this.saveChange}
                ></input>
                <input
                    id="footerText"
                    type="text"
                    className="inputbox"
                    placeholder="Footer Text"
                    onChange={this.saveChange}
                ></input>
                <button className="btn" onClick={() => { this.updateImage() }}>Generate</button>
                <hr></hr>
                {this.state.imageURL !== "" ? <MemeImage imageURL={this.state.imageURL} header={this.state.headerText} footer={this.state.footerText} /> : <div />}
            </div>);
    }
    saveChange(event) {
        const isheader = (event.target.id === "headerText")
        this.setState((p) => {
            return {
                footerText: isheader ? p.footerText : event.target.value,
                headerText: isheader ? event.target.value : p.headerText
            }
        });

    }
    async updateImage() {
        console.log("Loading")
        console.log(parseInt(Math.random() * 10) + 10)
        try {
            const response = await axios({
                method: 'GET',
                url: "https://api.imgflip.com/get_memes",
                timeout: 20000
            });
            const url = response.data.data.memes[parseInt(Math.random() * 10) + 10].url;
            console.log(url);
            this.setState({ imageURL: url })
        } catch (e) {
            console.log(e);
        }
        console.log("Done")
    }
}

export default Form;