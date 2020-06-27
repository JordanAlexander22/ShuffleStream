import { FETCH_GAME_STREAMS } from './types';
import test from '../components/test';


// const url = 'https://api.twitch.tv/kraken/streams/';

export const fetchStreams = () => dispatch => {
	test.get().then(res => res).then(streams =>
		dispatch({
			type: FETCH_GAME_STREAMS,
			payload: streams
		})
	);
};
