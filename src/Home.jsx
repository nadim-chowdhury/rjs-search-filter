import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const nameFilter = (e) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(e.target.value))
    );
  };

  const emailFilter = (e) => {
    setRecords(
      data.filter((f) => f.email.toLowerCase().includes(e.target.value))
    );
  };

  return (
    <div className="home">
      <div className="input">
        <input type="text" placeholder="Search Name" onChange={nameFilter} />
        <input type="text" placeholder="Search Email" onChange={emailFilter} />
      </div>

      <table>
        <thead>
          <tr>
            <th className="id">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
