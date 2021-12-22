import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Knowus from "./Components/Knowus/Knowus";
import Footer from "./Components/Footer/Footer";
import WhyUs from "./Components/WhyUs/WhyUs";
import "./App.scss";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Knowus />
            <WhyUs />
            <Footer />
        </>
    );
}

export default App;
