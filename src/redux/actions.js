import { SET_COMMENTS } from "./type";

export function actionSetComments(comments) {
  return {
    type: SET_COMMENTS,
    payload: comments,
  }
}
