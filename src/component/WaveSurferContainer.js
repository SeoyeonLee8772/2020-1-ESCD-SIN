import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';
import "p5/lib/addons/p5.sound";
import p5 from "p5";


class WaveSurferContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
        }
        this.mic = new p5.AudioIn();
        this.recorder = new p5.SoundRecorder();
        this.soundFile = new p5.SoundFile();

        this.recorder.setInput(this.mic);
    }

    componentDidMount(){
            let waveform = WaveSurfer.create({
            container: "#waveform",
            waveColor: "#01BAB6",
            interact: false,
            cursorWidth: 0,
            barGap: 2,
            barHeight: 10,
            height: 100,
            progressColor: '#2D5BFF',
            fillParent: true,
            forceDecode: true,
            plugins: [ MicrophonePlugin.create() ],
            cursorWidth: 0.5,
            responsive: true,
        });

        waveform.microphone.on('deviceReady', function (stream) {
            console.info('Device ready!', stream);
        });
        waveform.microphone.on('deviceError', function(code) {
            console.warn('Device error: ' + code);
        })
        let microphone = waveform.microphone; // you had the case wrong!
        microphone.start(); 

    
    }

    handlePlay = () => {
        this.state = {
            playing: !this.state.playing,
        }
        let { playing } = this.state;
        if(playing){
            this.mic.start();
            this.recorder.record(this.soundFile)
        }else{
            this.mic.stop();
            this.recorder.stop();
            this.soundFile.play();
        }
        // this.waveform.playPause();
    };
    render() {

        return (
            <div>        
                <div id="waveform" />
                <button onClick={() => this.handlePlay()}>
                {!this.state.playing ? <i className="microphone icon"></i> :  <i className="microphone slash icon"></i>}
                </button>
            </div>
        );
    }
}
export default WaveSurferContainer;