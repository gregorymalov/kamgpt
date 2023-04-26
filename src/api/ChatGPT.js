import axios from "axios";

const url = "https://api.neuroset.mlab.digital/";

const message = axios.create({
  baseURL: url + "get_answer?text=",
  withCredentials: true,
});

export const messageAPI = {
  getAnswer: (messageFromInput) => {
    return message.get(messageFromInput).then((res) => res);
  },
};
