import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Books } from "../pages/Books";
import NotFound from "../pages/NotFound";
import { Details } from "../pages/Books/Details";
import { Create } from "../pages/Books/Create";

const ApplicationRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Books />} />
        <Route path="/create" element={<Create />} />
        <Route path="/books/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
