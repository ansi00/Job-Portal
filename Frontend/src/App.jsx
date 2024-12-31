import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CreateCompany from "./components/admin/CreateCompany";
import CompanySetup from "./components/admin/CompanySetup";
import AdminJobs from "./components/admin/AdminJobs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/description/:id" element={<JobDescription />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/companies" element={<Companies />} />
        <Route path="/admin/companies/create" element={<CreateCompany />} />
        <Route path="/admin/companies/:id" element={<CompanySetup />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
