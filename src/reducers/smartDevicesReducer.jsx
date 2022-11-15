export const smartDevicesReducer = (state, action) => {
  switch (action.type) {
    // TODO: Other action types
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          action.payload === index ? !light : light
        ),
      };
     
  }
  return state;
};