export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_LOAD = "ORDER_LOAD";
export const ORDER_ERROR = "ORDER_ERROR";
export const ORDER_INFO = "ORDER_INFO";

export const orderSuccess = () => {
  return {
    type: ORDER_SUCCESS,
  };
};

export const orderError = () => {
  return {
    type: ORDER_ERROR,
  };
};

export const orderLoad = (values) => {
  return {
    type: ORDER_LOAD,
    payload: values,
  };
};
export const orderInfo = (values) => {
  return {
    type: ORDER_INFO,
    payload: values,
  };
};