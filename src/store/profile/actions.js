export const TOGGEL_CHECKBOX = "PROFILE::TOGGEL_CHECKBOX"
export const CHENGE_NAME = "PROFILE::CHENGE_NAME"

export const toggleCheckbox = {
    type: TOGGEL_CHECKBOX
}

export const chengeName= (name)=>( {
    type: CHENGE_NAME,
    payload: name,
})