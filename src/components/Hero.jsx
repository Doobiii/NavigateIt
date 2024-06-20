import React, { useState, useContext } from "react";
import HeroImg from "../assets/image.png";
import { fetchData } from "../utils/fetchData";
import { NavigationContext } from "../context/NavigationContext";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");
  const { setNavigationData } = useContext(NavigationContext);
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      if (src === "" || dest === "") {
        alert("Please enter the location and destination.");
        return;
      }

      const res = await fetchData(src, dest);
      console.log(res);
      setNavigationData(res.data);
      // Handle the data or update state as needed

      setSrc("");
      setDest("");
      navigate(`/navigation-info/${res.request_id}`);
    } catch (error) {
      console.error("Error in handleSearch:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <main
      className="md:px-12 md:py-6 bg-primaryDark h-screen"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* <Navbar sidebar={sidebar} setSidebar={setSidebar} /> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[665px]">
            {/* text-content-section */}
            <div className="text-white mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 className="text-3xl font-medium uppercase text-shadow">
                find your way
              </h1>
              <input
                className="border border-white px-4 py-2 rounded-lg w-full text-black"
                type="text"
                value={src}
                onChange={(e) => setSrc(e.target.value)}
                placeholder="Enter your location"
              />
              <input
                className="border border-white px-4 py-2 rounded-lg w-full text-black"
                type="text"
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                placeholder="Enter the destination"
              />

              <button
                className="text-white hover:text-gray-300 py-2 px-4 rounded-lg z-1"
                onClick={handleSearch}
              >
                Navigate
              </button>
            </div>

            <div className="left-4 hidden md:block col-span-1 lg:col-span-2 text-center">
              <img
                className="img-shadow relative z-[1] w-[450px]"
                src={HeroImg}
                alt="orange"
              />
            </div>
          </div>
        </div>
        <h1
          className="text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px]  text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow"
          style={{
            fontSize: "10vw",
            width: "90vw",
            margin: "0 auto",
            // maxWidth: "2rem",
          }}
        >
          navigate It
        </h1>
      </section>
    </main>
  );
};

export default Hero;
