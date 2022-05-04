import React,{Fragment, useEffect,useState} from "react";

const ListCustomer =()=>{

    const [customers, setCustomers]=useState([])

    const getCustomerdata=async()=>{
        try{
            const response=await fetch("http://localhost:5000/customers")
            const jsonData = await response.json()

            setCustomers(jsonData)
        }
        catch(err){
            console.error(err.message);
        }
    };
    useEffect(()=>{
        getCustomerdata();
    },[]);



    
    return (<Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Customer_id</th>
        <th>Customer_unique_id</th>
        <th>Customer_zip_code_prefix</th>
        <th>Customer_city</th>
        <th>Customer_state</th>
      </tr>
    </thead>
    <tbody>
     {customers.map(customer =>(
         <tr>
             <td>{customer.customer_id}</td>
             <td>{customer.customer_unique_id}</td>
             <td>{customer.customer_zip_code_prefix}</td>
             <td>{customer.customer_city}</td>
             <td>{customer.customer_state}</td>
         </tr>
     )
        )}
    </tbody>
  </table>
    </Fragment>
    );
};

export default ListCustomer;