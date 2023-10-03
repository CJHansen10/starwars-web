import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const films = encodeURIComponent(name.toLowerCase());
    const url = `https://swapi.dev/api/${films}/`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((e) => setData(e));
  }, [name]);

  return (
    <div className="App">
      <Title text="Star Wars Film Info!" />
      <Entry action={setName} />
      <Info name={name} data={data} />
    </div>
  );
}
