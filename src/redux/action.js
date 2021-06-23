import * as types from './types'
// export const openpopup=async (dispatch) => {
//    dispatch({
//             type:types.OPENMESSAGE
//         })
// }

export const openpopup = (payload) => ({
    type: types.OPENMESSAGE,
    
})
export const selected = (payload) => ({
    type: types.SELECTED,
    payload
})
export const setuser = (payload) => ({
    type: types.USER,
    payload
})
export const setTotal = (payload) => ({
    type: types.setTotal,
    payload
})

export const addtocart = (payload) => ({
    type: types.addtocart,
    payload
})
export const removefromcart = (payload) => ({
    type: types.removefromcart,
    payload
})

