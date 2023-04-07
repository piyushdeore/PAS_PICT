import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../constants/statuses";
import USER_TYPES from "../constants/userTypes";
import axios from "axios";

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    status: STATUSES.LOADING,
    user: {
      userType: "",
      token: "",
    },
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    registerGuestSuccess(state, action) {
      return { status: STATUSES.SUCCESS, user: action.payload };
    },
    registerGuestFail(state, action) {
      return { status: STATUSES.ERROR, error: action.payload };
    },
    loginGuestSuccess(state, action) {
      return { status: STATUSES.SUCCESS, user: action.payload };
    },
    loginGuestFail(state, action) {
      return { status: STATUSES.ERROR, error: action.payload };
    },
    loginStudentSuccess(state, action) {
      return { status: STATUSES.SUCCESS, user: action.payload };
    },
    loginStudentFail(state, action) {
      return { status: STATUSES.ERROR, error: action.payload };
    },
    loginAdminSuccess(state, action) {
      return { status: STATUSES.SUCCESS, user: action.payload };
    },
    loginAdminFail(state, action) {
      return { status: STATUSES.ERROR, error: action.payload };
    },
  },
});

// Actions
export const {
  setStatus,
  registerGuestSuccess,
  registerGuestFail,
  loginGuestSuccess,
  loginGuestFail,
  loginStudentSuccess,
  loginStudentFail,
  loginAdminSuccess,
  loginAdminFail,
} = userLoginSlice.actions;

export default userLoginSlice.reducer;

// Thunks

export function registerGuestsAction(guestLoginData) {
  return async function registerGuestsActionThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/guests", guestLoginData, config);
      const guestData = { userType: USER_TYPES.GUEST, token: data.token };
      dispatch(registerGuestSuccess(guestData));
      localStorage.setItem("userLogin", JSON.stringify(guestData));
    } catch (err) {
      console.log(err);
      dispatch(registerGuestFail(err));
    }
  };
}

export function loginGuestsAction(guestLoginData) {
  return async function loginGuestsActionThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/guests/login",
        guestLoginData,
        config
      );
      guestLoginData.userType = USER_TYPES.GUEST;
      guestLoginData.token = data.token;
      dispatch(loginGuestSuccess(guestLoginData));
      localStorage.setItem("userLogin", JSON.stringify(guestLoginData));
    } catch (err) {
      console.log(err);
      dispatch(loginGuestFail(err));
    }
  };
}

export function loginStudentsAction(studentLoginData) {
  return async function loginStudentsActionThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/students/login",
        studentLoginData,
        config
      );
      studentLoginData.userType = USER_TYPES.STUDENT;
      studentLoginData.token = data.token;
      dispatch(loginStudentSuccess(studentLoginData));
      localStorage.setItem("userLogin", JSON.stringify(studentLoginData));
    } catch (err) {
      console.log(err);
      dispatch(loginStudentFail(err));
    }
  };
}

export function loginAdminAction(adminLoginData) {
  return async function loginAdminActionThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/admin/login",
        adminLoginData,
        config
      );
      adminLoginData.userType = USER_TYPES.ADMIN;
      adminLoginData.token = data.token;
      dispatch(loginAdminSuccess(adminLoginData));
      localStorage.setItem("userLogin", JSON.stringify(adminLoginData));
    } catch (err) {
      console.log(err);
      dispatch(loginAdminFail(err));
    }
  };
}
