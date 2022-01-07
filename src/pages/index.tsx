// Либо использовать @loadable/component, в рамках туториала - некритично
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./about";
import HomePage from "./home";

//const AboutPage = lazy(() => import("./about"));

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
};