import axios from 'axios';

const BASE_URL = "/api";

export async function getComments() {
  const response = await axios.get(`${BASE_URL}/comments`);
  const comments = response.data;

  return comments;
}

export async function createComment(comment) {
  return await axios.post(`${BASE_URL}/comments`, comment);
}
