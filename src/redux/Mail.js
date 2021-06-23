/* eslint-disable eqeqeq */
import * as types from "./types";
import * as data from "./../data.json";
import { Satellite } from "@material-ui/icons";
import { Accordion } from "@material-ui/core";
const initialState = {
  data: data,
  cart: [],
  total: 0,
  currentdata: {},
};
//export count=state.cart.reduce(item=>item.count+acc,0)
const Mail = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPENMESSAGE:
      return { ...state, openmessage: !state.openmessage };

    case types.CLOSEMESSAGE:
      return { ...state, closemessage: false };
    case types.SELECTED:
      return { ...state, currentstate: payload };

    case types.USER: {
      return { ...state, Person: payload };
    }
    case types.setTotal:
      if (payload === "-1") return { ...state, total: state.total - 1 };
      else return { ...state, total: state.total + 1 };
    case types.addtocart:
      const index = state.cart.findIndex((item) => item.id === payload.id);
      let obj;
      console.log(index);
      if (index >= 0) {
        state.cart[index].count = state.cart[index].count + 1;
        obj = state.cart[index];
        return { ...state, cart: [...state.cart] };
      } else {
        obj = {
          name: payload.name,
          id: payload.id,
          cost: payload.final_price,
          count: 1,
        };
        return { ...state, cart: [...state.cart, obj] };
      }
    case types.removefromcart:
      const index1 = state.cart.findIndex((item) => item.id == payload.id);
      // eslint-disable-next-line no-unused-vars
      let obj1;
      console.log(index1);
      if (index1 > -1) {
        if (state.cart[index1].count > 1) {
            console.log(state.cart[index1].count)
          state.cart[index1].count = state.cart[index1].count - 1;
          // obj1=state.cart[index1];
          return { ...state, cart: [...state.cart] };
        } else if (state.cart[index1].count == 1) {
            console.log(state.cart[index1].count)
            state.cart.splice(index1, 1)
            
          return { ...state, cart:[...state.cart ]};
        }
      } else {
        console.warn(`cant remove product as it is not present in basket`);
      }
      break;

    default:
      return state;
  }
};

export default Mail;
