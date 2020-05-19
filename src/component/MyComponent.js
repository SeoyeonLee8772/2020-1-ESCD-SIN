import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        }
    }
    componentDidMount(){
        this.waveform = WaveSurfer.create({
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 80,
            progressColor: '#2D5BFF',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });
        this.waveform.load('https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3');
    }
    handlePlay = () => {
        this.setState({ playing: !this.state.playing });
        this.waveform.playPause();
    };
    render() {

        return (
            <div>        
                <div id="waveform" />
                <button onClick={this.handlePlay}>
                {!this.state.playing ? 'Play' : 'Pause'}
                </button>
            </div>
        );
    }
}
export default MyComponent;