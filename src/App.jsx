import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Knowus from "./Components/Knowus/Knowus";
import RecentWorks from "./Components/RecentWorks/RecentWorks";
import WhyUs from "./Components/WhyUs/WhyUs";
import Recommend from "./Components/Recommend/Recommend";
import ContactUs from "./Components/ContactUs/ContactUs";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import "./App.scss";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [isRender, setIsRender] = useState(false);

    useEffect(() => {
        if (isRender === false) {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            }
        } else {
            setIsMobile(false);
        }
    }, [isRender]);

    return (
        <>
            {isMobile ? (
                <div className="app-mob">
                    <h3>
                        Hey, this website is not optimised for Mobile Devices.
                        Open this website in desktop
                    </h3>
                    <button onClick={() => setIsRender(true)}>
                        Render Website Anyway
                    </button>
                </div>
            ) : (
                <>
                    <Navbar />
                    <Hero />
                    <Knowus />
                    <RecentWorks />
                    <WhyUs />
                    <Recommend />
                    <ContactUs />
                    <Features />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
