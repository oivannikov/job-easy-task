import { SET_COMMENTS } from "./type"

const initialState = {
  comments: [],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      }

    default: return state;
  }
}
