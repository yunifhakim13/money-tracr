import axios from "axios";

const url = process.env.API_CRUD;

export const getPost = () => {
  return axios.get(`${url}/List`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const getPostWithId = (id) => {
  return axios.get(`${url}/List/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
};

export const sendPostData = (data) => {
  return axios.post(`${url}/List/${data.id}`, data, {
    headers: {
      "Content-type": "application/json",
    },
  });
};
