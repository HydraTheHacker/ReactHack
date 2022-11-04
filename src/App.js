import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-template-curly-in-string
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
      Hello
    </div>
  );
};

export default App;
