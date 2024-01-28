import axios from "axios";
import {
  GET_DRIVERS,
  GET_DRIVER_BY_NAME,
  FILTER,
  ORDER_BY_NAME,
  ORDER_BY_DOB,
} from "./actions-types";

export const getDrivers = () => {
  const URL = "http://localhost:3001/drivers";

  return async (dispatch) => {
    try {
      const { data } = await axios(URL);
      dispatch({
        type: GET_DRIVERS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDriverByName = (driverName) => {
  const URL = "http://localhost:3001/driver";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}?Name=${driverName}`);
      return dispatch({
        type: GET_DRIVER_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCards = (payload) => ({
  type: FILTER,
  payload,
});

export const orderCardsByName = (payload) => ({
  type: ORDER_BY_NAME,
  payload,
});

export const orderCardsByDob = (payload) => ({
  type: ORDER_BY_DOB,
  payload,
});
