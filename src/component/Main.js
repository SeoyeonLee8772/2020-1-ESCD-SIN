import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Main extends Component {
    static propTypes = {
        prop: PropTypes
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="text-info text-center">
                        <p className="display-4">Voice Biometric for User Authentication</p>
                        <img  id="maintenance-gif" class="banner-graphic animation" src="images/maintenance-animation-trim.gif"></img>
					</div>
                </div>
            </div>
        )
    }
}
