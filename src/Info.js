import { useEffect, useState } from "react";
export default function Info({ name, data }) {
    function fetchCharacterData(url) {
        fetch(url)
            .then(async (response) => await response.json())
            .catch((e) => e);
    }
    const [characterdata, setcharacterdata] = useState("");
    useEffect(() => {
        if (data?.characters != null){
         let characterlist = []
         data?.characters.map((person, index) => (
         characterlist.push(fetchCharacterData(person))))
         setcharacterdata(characterlist)
}}, [data]);
    
    return !data || !name ? (
      <p></p>
    ) : !characterdata || !data?.planets || !data?.characters ? (
      <p>No data for {name}</p>
    ) : (
      <div>
        <h2>Meet {name}</h2>
        
        <ul>
            
          {characterdata?.map((person, index) => (
            <li key={index}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  