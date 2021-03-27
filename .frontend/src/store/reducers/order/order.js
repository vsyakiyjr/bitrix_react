const initialState = {
  info: "",
  info_order: "",
  order_new: '',
  order_final: '',
  order_won: '',
  loading: false,
  error: false,
};

const order = (state = initialState, action) => {
  switch (action.type) {
     case "ORDER_LOAD":
      return {
        ...state,
        info: action.payload,
        error: false,
      };
    case "ORDER_ERROR":
      return {
        ...state,
        error: true,
      };
    case "ORDER_SUCCESS":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "ORDER_INFO":
     return {
       ...state,
       loading: false,
       error: false,
       info_order: action.payload,
       order_new: action.payload.filter(item => {
         if(item.STAGE_ID === "NEW") {
           return  item
         }
       }),
       order_final: action.payload.filter(item => {
         if(item.STAGE_ID === "FINAL_INVOICE") {
           return  item
         }
       }),
       order_won: action.payload.filter(item => {
         if(item.STAGE_ID === "WON") {
           return  item
         }
       })
     }
    default:
      return state;
  }
};
export default order;
