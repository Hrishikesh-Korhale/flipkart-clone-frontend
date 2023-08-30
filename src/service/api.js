import axios from "axios";
const URL = "https://flipkart-clone-server-git-master-hrishikesh-korhale.vercel.app";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling Signup api ", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling Login api ", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${URL}/payment`, data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling paytm api ", error);
  }
};
