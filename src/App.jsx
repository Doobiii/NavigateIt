import React from "react";
import Hero from "./components/Hero.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import { Route, Router, Routes } from "react-router-dom";
import NavigationInfo from "./pages/NavigationInfo.jsx";
import { NavigationProvider } from "./context/NavigationContext.jsx"; // Correct import

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <NavigationProvider>
        {/* <Hero /> */}
        {/* <NavigationInfo /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/navigation-info" element={<NavigationInfo />} />
        </Routes>
      </NavigationProvider>
    </>
  );
};

export default App;
