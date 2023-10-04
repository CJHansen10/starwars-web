import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log(name)
    const films = encodeURIComponent(name);
    const url = `https://swapi.dev/api/films/${films}/`;
    console.log(url);

    setLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => setData(e));
  }, [name]);

  return (
    <div className="App">
      <Title text="Star Wars Film Info!" />
      <Entry action= {setName} />
      {loading && <loader />}
      <Info name={name} data={data} />
    </div>
  );
}
