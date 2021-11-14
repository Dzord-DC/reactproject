import { TOGGEL_CHECKBOX } from "./actions"

const initialState = {
    checkbox: false,
    name: 'default name',
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGEL_CHECKBOX:
            return {
                ...state,
                checkbox: !state.checkbox
            };
        default: 
        return state;
    }
};