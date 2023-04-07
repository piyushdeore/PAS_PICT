import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../constants/statuses";
import USER_TYPES from "../constants/userTypes";
import axios from "axios";

const userLoginFromStorage = localStorage.getItem("userLogin")
  ? JSON.parse(localStorage.getItem("userLogin"))
  : null;

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState: {
    status: STATUSES.LOADING,
    user: userLoginFromStorage,
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

      const payload = {
        userType: USER_TYPES.GUEST,
        token: data.token,
        guest: data.guest,
      };
      dispatch(loginGuestSuccess(payload));
      localStorage.setItem(
        "userLogin",
        JSON.stringify({
          userType: USER_TYPES.GUEST,
          token: data.token,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(loginGuestFail(err.message));
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
      const payload = {
        userType: USER_TYPES.STUDENT,
        token: data.token,
        student: data.student,
      };
      dispatch(loginStudentSuccess(payload));
      localStorage.setItem(
        "userLogin",
        JSON.stringify({
          userType: USER_TYPES.STUDENT,
          token: data.token,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(loginStudentFail(err.message));
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
      const payload = {
        userType: USER_TYPES.ADMIN,
        token: data.token,
      };
      dispatch(loginAdminSuccess(payload));
      localStorage.setItem("userLogin", JSON.stringify(payload));
    } catch (err) {
      console.log(err);
      dispatch(loginAdminFail(err.message));
    }
  };
}
