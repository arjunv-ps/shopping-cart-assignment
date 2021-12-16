import React from "react";
import { Login, SignUp, NoMatch } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<NoMatch />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
