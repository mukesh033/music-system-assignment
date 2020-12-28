import React from 'react'
import { connect } from 'react-redux'
import { updateSong } from '../redux'

const PlayList = (props) => {
    return (
        <>
           <h3>{props.songs.item.title}</h3>
            <ul className="song-list-wrapper">
                { props.songs.item.songs.map((item, index) => ( 
                        <li key={item.key}>
                            <div className="arrow" onClick={() => props.updateSong(item) }>
                                <img src='images/triangle-right-arrow.svg' className="arrow" alt="arrow" />
                            </div>
                            <div className="song-name" onClick={() => props.updateSong(item) }>
                                {item.name}
                            </div>
                            <div className="duration">
                                {item.duration}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

  
const mapDispatchToProps = (dispatch) => {
    return {
        updateSong: item => dispatch(updateSong(item))
    }
}
  
  export default connect(
    null,
    mapDispatchToProps
  )(PlayList)
