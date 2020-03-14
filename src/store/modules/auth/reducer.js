import produce from 'immer';

const initialState = {
    token: null,
    signed: false,
    loading: false,
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS': {
            return produce(state, draft => {
                draft.token = action.payload.token;
                draft.signed = true;
                return draft;
            });
        }
        default:
            return state;
    }
};

export default auth;
