import { UPDATE_SONG } from './songType'

export const updateSong = (item = {}) => {
	return {
		type: UPDATE_SONG,
		payload: item
		
	}
}