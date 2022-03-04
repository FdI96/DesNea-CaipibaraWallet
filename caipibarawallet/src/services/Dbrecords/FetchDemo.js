import React, { useState, useEffect } from 'react';
import Records from '../../components/gera/Records/Records';
const urlServer = 'http://localhost:3003/'


const FetchDemo = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch('http://localhost:3003/operations')
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setRecords(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{paddingBottom:"100px"}}>
      <h1>Fetch Example</h1>
      {records && <Records data={records} />}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
};
export default FetchDemo;