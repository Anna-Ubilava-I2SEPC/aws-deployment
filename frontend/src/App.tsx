import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://51.21.199.89:3001/api/latest")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched from backend:", json);
        setData(json.data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>Latest Answer:</h1>
      <span id="answer">{data}</span>
    </div>
  );
};

export default App;
