import { UPDATE_SONG } from './songType'

const initialState = {
    recentSong: {}
}

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SONG: return {
      ...state,
      recentSong: action.payload
    }

    default: return state
  }
}

export default songReducer