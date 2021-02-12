import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signUp = (formData, history) => async (dispatch) => {
  try {
    //SignUp the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    //login the user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
