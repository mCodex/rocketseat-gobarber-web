import produce from 'immer';

const initialState = {
    profile: null,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS': {
            return produce(state, draft => {
                draft.profile = action.payload.user;
                return draft;
            });
        }
        default:
            return state;
    }
};

export default user;
