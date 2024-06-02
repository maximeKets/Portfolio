import React, {useState, useEffect} from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {SpeedInsights} from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';


function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Router>
                <Preloader load={load}/>
                <div className={`App min-h-screen flex flex-col ${load ? "no-scroll" : "scroll"}`}>
                    <Navbar/>
                    <ScrollToTop/>
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/projets" element={<Projects/>}/>
                            <Route path="/profil" element={<About/>}/>
                            <Route path="/cv" element={<Resume/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                        <SpeedInsights/>
                    </div>
                    <Footer/>
                </div>
            </Router>
            <Analytics />
            <SpeedInsights/>
        </div>
    )
        ;
}

export default App;
