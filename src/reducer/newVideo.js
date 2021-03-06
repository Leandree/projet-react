import { POST_VIDEO_LOADING, POST_VIDEO_COMPLETE } from '../actions/videos';

export default function (state = { video: null, isLoading: false }, action) {
	switch (action.type) {
		case POST_VIDEO_LOADING:
			return {
				video: null,
				isLoading: true,
			};
		case POST_VIDEO_COMPLETE:
			return {
				video: action.video,
				isLoading: false,
			};
	}
	return state;
}
