import React, { useMemo, useState, useEffect } from "react";
import API from "../utils/API"
import Table from "../components/GlobalDataTable";


function Home() {





  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Global Data",
        // First group columns
        columns: [
          {
            Header: "Country",
            accessor: "country"
          },
          {
            Header: "Total Cases",
            accessor: "cases.total"
          },
    
          {
            Header: "New",
            accessor: "cases.new"
          },
          {
            Header: "Active",
            accessor: "cases.active"
          }
        
        ]
      }
    ],
    []
  );
  const [data, setdata] = useState([]);

  useEffect(() => { 
    API.stats().then(res => {

      setdata(res.data.response)
    })
    }, []);

  return (

      <div>
      <Table columns= {columns} data= {data}/>
      </div>
    
    );
}

export default Home;