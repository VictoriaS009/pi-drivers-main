import {
  GET_DRIVERS,
  GET_DRIVER_BY_NAME,
  FILTER,
  ORDER_BY_NAME,
  ORDER_BY_DOB,
} from "../action/actions-types";

const initialState = {
  drivers: [],
  allDrivers: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: payload,
        drivers: payload,
      };
    case GET_DRIVER_BY_NAME:
      return {
        ...state,
        allDrivers: payload,
        drivers: payload,
      };
    case FILTER:
      let filteredDrivers = [];
      if (payload === "API") {
        filteredDrivers = state.allDrivers.filter((driver) => driver.id <= 508);
      } else if (payload === "DATABASE") {
        filteredDrivers = state.allDrivers.filter((driver) => driver.id > 508);
      }
      return {
        ...state,
        drivers: payload === "All" ? state.allDrivers : filteredDrivers,
      };
    case ORDER_BY_NAME:
      if (payload === "ASC") {
        state.allDrivers.sort((a, b) =>
          a.name.forename.localeCompare(b.name.forename)
        );
      } else if (payload === "DES") {
        state.allDrivers.sort((a, b) => {
          a.name.forename.localeCompare(b.name.forename);
          return b.name.forename.localeCompare(a.name.forename);
        });
      }
      return {
        ...state,
        drivers: [...state.allDrivers],
      };
    case ORDER_BY_DOB:
      if (payload === "ASC") {
        state.allDrivers.sort((a, b) => new Date(a.dob) - new Date(b.dob));
      } else if (payload === "DES") {
        state.allDrivers.sort((a, b) => new Date(b.dob) - new Date(a.dob));
      }
      return {
        ...state,
        drivers: [...state.allDrivers],
      };

    default:
      return state;
  }
}

export default reducer;
