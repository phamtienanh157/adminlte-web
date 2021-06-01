import axios from "axios";

export function getListImage() {
  return axios.get("https://picsum.photos/v2/list?page=2&limit=50");
}
