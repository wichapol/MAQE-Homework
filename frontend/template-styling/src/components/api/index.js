import axios from "axios";

export const getPosts = async () => {
  const respons = await axios.get("http://maqe.github.io/json/posts.json");
  return respons;
};
export const getAuthors = async () => {
  const respons = await axios.get("http://maqe.github.io/json/authors.json");
  return respons;
};
