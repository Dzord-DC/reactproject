export const TOGGEL_CHECKBOX = "PROFILE::TOGGEL_CHECKBOX"
export const CHENGE_NAME = "PROFILE::CHENGE_NAME"
export const SIGN_IN = "PROFILE::SIGN_IN"
export const SIGN_OUT = "PROFILE::SIGN_OUT"

export const toggleCheckbox = {
    type: TOGGEL_CHECKBOX
}

export const chengeName= (name)=>( {
    type: CHENGE_NAME,
    payload: name,
})

export const signIn= ()=>( {
    type: SIGN_IN
})
export const signOut= ()=>( {
    type: SIGN_OUT
})