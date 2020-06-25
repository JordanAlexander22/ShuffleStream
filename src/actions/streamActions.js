import { FETCH_GAME_STREAMS } from './types';


// const url = 'https://api.twitch.tv/kraken/streams/';

export const fetchStreams = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(games =>
		dispatch({
			type: FETCH_GAME_STREAMS,
			payload: games
		})
	);
};
