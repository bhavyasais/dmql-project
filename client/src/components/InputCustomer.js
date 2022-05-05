import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import ListCustomer from './ListCustomer';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('http://localhost:5000/query/select%20*%20from%20customers%20limit%2030');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);
      setData(result.data);
      console.log("pizza ",result.data)
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        style={{width:"1300px",paddingTop:"15px",marginTop:"25px",marginLeft:"20px"}}
      />
      <button
        type="button"
        onClick={() =>{
          setUrl("http://localhost:5000/query/"+query.replace(/ /g, "%20"))}
        }
      >
        Search
      </button>

      <ListCustomer customers={data}/>
    </Fragment>
  );
}

export default App;