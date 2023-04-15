import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [spyData, setSpyData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchSpyData = async () => {
    try {
      setLoading(true);
      setError(false);
      const spyInfo = await axios.get("https://randomuser.me/api/");
      setSpyData(spyInfo);
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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
