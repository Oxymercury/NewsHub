import React, { createContext, useState, useEffect } from 'react';

export const DataBaseContext = createContext();

const DataBaseContextProvider = (props) => {
  const [Data, ChangeData] = useState(() => {
    const localData = localStorage.getItem('Data');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('Data', JSON.stringify(Data));
  }, [Data]);

  return (
    <DataBaseContext.Provider value={{ Data, ChangeData }}>
      {props.children}
    </DataBaseContext.Provider>
  );
}

export default DataBaseContextProvider;