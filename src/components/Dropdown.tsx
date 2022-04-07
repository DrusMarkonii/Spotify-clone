import React, { useState } from "react";
import axios from "axios";



export default function Dropdown() {
  const [selectValue, setSelectValue] = useState("Choose name");
  const [token, setToket] = useState('')



  const data = [
    { id: 1, name: "Andrei" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Oleg" },
  ];
  return (
    <div>
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {data.map(({ id, name }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
      <p>{selectValue}</p>
    </div>
  );
}
