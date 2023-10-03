export default function Info({ name, data }) {
    return !data || !name ? (
      <p></p>
    ) : !data?.planets || !data?.people ? (
      <p>No data for {name}</p>
    ) : (
      <div>
        <h2>Meet {name}</h2>
        <img src={data.planets} alt="planets" />
        <ul>
          {data.people.map((person, index) => (
            <li key={index}>{person.person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  