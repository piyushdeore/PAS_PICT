import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Pages/MainLayout/Signup";
import Login from "./Pages/MainLayout/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import StudentInformationForm from "./Pages/MainLayout/StudentInformationForm";
import "./App.css";
import Companies from "./Pages/StudentLayout/Companies";
import Statistics from "./Pages/StudentLayout/Statistics";
import UnderContruction from "./Pages/UnderContruction";
import LoginController from "./Pages/MainLayout/LoginController";
import StudentController from "./Pages/StudentLayout/StudentController";
import HomeLayout from "./Pages/MainLayout/HomeLayout";
import Landing from "./Pages/MainLayout/Landing";
import StudentProfile from "./Pages/StudentLayout/StudentProfile";
import LoginAdmin from "./Pages/MainLayout/LoginAdmin";
import SignupAdmin from "./Pages/MainLayout/SignupAdmin";
import AdminController from "./Pages/AdminLayout/AdminController";
import ProfileAdmin from "./Pages/AdminLayout/ProfileAdmin";
import JobPostingAdmin from "./Pages/AdminLayout/JobPostingAdmin";
import Calendar from "./Pages/StudentLayout/Calendar";
import StatisticsAdmin from "./Pages/AdminLayout/StatisticsAdmin";
import StudentDetails from "./Pages/AdminLayout/StudentDetails";
import GuestInformation from "./Pages/AdminLayout/GuestInformation";
// Added redux
import { Provider } from "react-redux";
import store from "./store/store";
import JobRoles from "./Pages/AdminLayout/JobRoles";
import JobDetailsEdit from "./Pages/AdminLayout/JobDetailsEdit";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path="/login-controller" element={<LoginController />} />
            <Route path="/student-login" element={<Login />} />
            <Route path="/student-signup" element={<Signup />} />
            <Route
              path="/student-information-form"
              element={<StudentInformationForm />}
            />
            <Route path="/admin-login" element={<LoginAdmin />} />
            <Route path="/admin-signup" element={<SignupAdmin />} />
          </Route>
          <Route path="student/" element={<StudentController />}>
            <Route index element={<StudentProfile />} />
            <Route path="Companies" element={<Companies />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="under-construction" element={<UnderContruction />} />
            {/* <Route path="schedule" element={<Calendar />} /> */}
          </Route>
          <Route path="admin/" element={<AdminController />}>
            <Route index element={<ProfileAdmin />} />
            <Route path="job-posting" element={<JobPostingAdmin />} />
            <Route path="jobrole-posting" element={<JobRoles />} />
            <Route path="statistics" element={<StatisticsAdmin />} />
            <Route path="studentdetails" element={<StudentDetails />} />
            <Route path="jobdetailsedit" element={<JobDetailsEdit />} />
            <Route path="guest-information" element={<GuestInformation />} />
            <Route path="schedule" element={<Calendar />} />

          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
