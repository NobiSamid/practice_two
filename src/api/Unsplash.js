import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Jgtj077FwwTyDIvWeUKor8WO0zbRnwKuA-QdHYUaik0",
  },
});
