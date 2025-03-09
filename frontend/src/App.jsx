import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User layout */}
          <Route index element={<Home />} />
        </Route>
        <Route>{/* Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
