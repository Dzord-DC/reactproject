import { CHENGE_NAME, TOGGEL_CHECKBOX, SIGN_IN, SIGN_OUT } from "./actions"

const initialState = {
    checkbox: false,
    name: 'default name',
    authed: false,
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGEL_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            };
            case CHENGE_NAME:
            return {
                ...state,
                name: action.payload
            };
            case SIGN_IN:
            return {
                ...state,
                authed: true
            };
            case SIGN_OUT:
            return {
                ...state,
                authed: false
            };
        default: 
        return state;
    }
};