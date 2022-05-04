import React,{Fragment} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


//import InputCustomer from './components/InputCustomer';
import ListCustomer from './components/ListCustomer';


function App() {
  return (
    <Fragment>
      
      <div className="container">
      <h1 className="text-center mt-5">Customer Data</h1>
      <form className="d-flex mt-5" >
            <input type="text" className="form-control"/>
            <button className="btn btn-success">Search</button>
        </form>
      <ListCustomer/>
      </div>
      
    
    </Fragment>
  );
}

export default App;
