import { FETCH_GAME_STREAMS } from './types';
import axios from 'axios';

const url = 'https://api.twitch.tv/kraken/streams/';

export const fetchStreams = () => (dispatch) => {
	axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((games) =>
		dispatch({
			type: FETCH_GAME_STREAMS,
			payload: games
		})
	);
};
