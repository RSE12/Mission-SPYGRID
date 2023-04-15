import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import SpyCard from "./components/SpyCard";
import Login from "./components/Login";
import { Alert, AlertTitle } from "@mui/material";

export default function App() {
  const [spyData, setSpyData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleFetchSpyData = async () => {
    try {
      setLoading(true);
      setError(false);
      const spyInfo = await axios.get("https://randomuser.me/api/");
      if (spyInfo.data && spyInfo.data.results && spyInfo.data.results[0]) {
        setSpyData(spyInfo.data.results[0]);
      } else {
        setSpyData({});
      }
      console.log(spyInfo);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleFetchSpyData();
  }, []);

  return (
    <div className="App">
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error Loading Spy Data — <strong>Refresh Again</strong>
        </Alert>
      )}
      {sessionStorage.getItem("isLoggedIn") || loggedIn ? (
        <SpyCard
          isLoading={isLoading}
          spyData={spyData as spy}
          handleNext={handleFetchSpyData}
        />
      ) : (
        <Login
          handleLoginSuccess={() => {
            setLoggedIn(true);
          }}
        />
      )}
    </div>
  );
}
