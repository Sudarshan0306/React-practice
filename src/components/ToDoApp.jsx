import  { useState } from "react";

const ToDoApp = () => {
  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const HandleAdd = () => {
    if (name.trim() !== "") {
      setNameList([...nameList, name.trim()]);
      setName("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") HandleAdd();
  };

  const handleDelete = (index) => {
    const updatedList = nameList.filter((_, i) => i !== index);
    setNameList(updatedList);
  };
  return (
    <div>
      <label className="text-3xl font-bold" htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        onKeyDown={handleKeyPress}
        className="text-3xl"
      />
      <button onClick={HandleAdd}>Add To List</button>
      <ul>
        {nameList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
