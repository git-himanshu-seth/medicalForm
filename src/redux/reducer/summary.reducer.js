import summaryType from "./summaryType";
const initialState = {};

const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case summaryType.SUMMARY_DATA:
      return {
        ...state,
        summaryData: action.payload,
      };
    default:
      return state;
  }
};

export default summaryReducer;
