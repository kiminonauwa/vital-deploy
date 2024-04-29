import React, { createContext, useState } from "react";

const DataContext = createContext();

const Context = ({ children }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [birthdate, setdate] = useState("");
  const [gender, setGender] = useState("");
  const [checkedby, setCheckedby] = useState("");
  const [temperature, setTemperature] = useState(0.0);
  const [pulse, setPulse] = useState(0);
  const [oxygen, setOxygen] = useState(0);
  const [bp, setBP] = useState("");
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [admin, setAdmin] = useState("");
  return (
    <DataContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        birthdate,
        setdate,
        gender,
        setGender,
        checkedby,
        setCheckedby,
        temperature,
        setTemperature,
        pulse,
        setPulse,
        oxygen,
        setOxygen,
        setBP,
        bp,
        user,
        setUser,
        selectedUser,
        setSelectedUser,
        admin,
        setAdmin,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, Context };
