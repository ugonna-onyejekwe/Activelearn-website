import "./App.scss";
import { Nav_bar } from "./component/navbar/navbar";
import { Routes, Route, useLocation } from "react-router-dom";

import { Home } from "./pages/home/home";
import { Footer } from "./component/footer/footer";
import { All_courses } from "./pages/courses/all_courses";
import { All_teachers } from "./pages/teachers/teachers";
import { Contact_us } from "./pages/contact/contact";
import { About_us } from "./pages/about/about";
import { Sign_up } from "./pages/signUp/signUp";
import { Course_datail } from "./pages/course_details/course_details";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/courses" element={<All_courses />} />
        <Route path="/:name" element={<Course_datail />} />
        <Route path="/teachers" element={<All_teachers />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/sign_up" element={<Sign_up />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
