import React from 'react'
import {
	PLYINGDATA,
} from '../dummy-data'
import ReactAudioPlayer from 'react-audio-player';

import { connect } from 'react-redux'

const MusicPlaying = (props) => {
    return (
        <>
            <div className="playing-container">
                <div className="inner-box">
                    <img src={PLYINGDATA.image} className="cd-image" alt="disk" />
                </div>
                <div className="inner-box">
                    <h4>Now Playing</h4>
                    <p>{props.getItem.name}</p>
                    <ReactAudioPlayer
                        src={props.getItem.path}
                        autoPlay
                        controls
                    />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        getItem: state.song.recentSong
    }
}

export default connect(
    mapStateToProps,
    null
  )(MusicPlaying)
