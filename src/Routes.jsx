import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
const Home = React.lazy(()=> import("./pages/Home"))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<div className="modal"><div className="loader"></div></div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/activity" element={<Activity/>} /> */}
          {/* <Route path="/registrati" element={<Registrati/>} />
          <Route path="/dashtest" element={<ProtectedRoute element={DashTest}/>} />
          <Route path="/verificaeta" element={<ProtectedRoute element={VerificaEta}/>} />
          <Route path="/responsive" element={<ProtectedRoute element={Responsive}/>} /> */}
          {/* <Route path="/" element={<ProtectedRoute element={Manager} />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;


//todo:
/*
leggere react-firebase-hooks



*/