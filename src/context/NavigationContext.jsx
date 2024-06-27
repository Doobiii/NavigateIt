// NavigationContext.jsx
import React, { createContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
export const NavigationContext = createContext();
import { fetchData } from "../utils/fetchData";

export const NavigationProvider = ({ children }) => {
  const [navigationData, setNavigationData] = useState(null);
  const [src, setSrc] = useState("");
  const [dest, setDest] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = useCallback(async () => {
    try {
      if (src === "" || dest === "") {
        alert("Please enter the location and destination.");
        return;
      }

      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [src, dest, navigate]);
  return (
    <NavigationContext.Provider
      value={{
        navigationData,
        setNavigationData,
        src,
        setSrc,
        dest,
        setDest,
        handleSearch,
        loading,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
