import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const api = axios.create({
    baseURL: `http://localhost:5000`
})
export default class Main extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props)
        api.get("/").then(res => {
            console.log("check")
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="text-info text-center">
                        <p className="display-4">Voice Biometric for User Authentication</p>
                        <img  id="maintenance-gif" class="banner-graphic animation" src="images/maintenance-animation-trim.gif"></img>
					</div>      
                    <div className="text-center">
                        Something
                    </div>
                </div>
            </div>
        )
    }
}
