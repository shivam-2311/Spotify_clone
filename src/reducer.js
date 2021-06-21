export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQAMbIiO7pji53GKLt0ROKqpFzI0ZImoGWrzi96ozz0svOyVFXecLLTRZbZ0_k1C0xVAeQHcrK5JR6vH7Hsa7AexJNW8FPJrJMgo-uCAgC6gesfhYxHdZvjJ7-Xt9A8UHvVlNAIR8Loq8x1Q9CR4nUm6xhWqkq4yt8GxVZZwbUL7y_BD',
};

const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
};

export default reducer;