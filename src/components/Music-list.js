import React, { useState } from 'react'
import {
	MUSICLISTS,
} from '../dummy-data'
import PlayList from "./Play-list";

const MusicList = () => {

    let [getsongList, setsongList] = useState({})

    const listenBtn = (item, index) => {
        setsongList({item})
    }

    return (
        <>
            <div className="list-container">
                <div className="list-inner-box">
                    <h3>DiscoGraphy</h3>
                    <ul className="disco-graphy-list">
                        { MUSICLISTS.map((item, index) => ( 
                            <li key={item.key}>
                                <div className="name">{item.title}</div>
                                <div className="equal">=</div>
                                <div className="date">{item.year}</div>
                                <div className="btn-wrapper">
                                    <button type="button"> Buy </button>
                                    <button type="button" onClick={() => listenBtn(item, index)}> Listen </button>
                                </div>
                            </li>
                         ))
                        }
                    </ul>
                </div>
                <div className="list-inner-box">
                    {Object.keys(getsongList).length > 0 && (
                        <PlayList songs={getsongList}></PlayList>
                    )}
                </div>
            </div>
        </>
    )
}

export default MusicList