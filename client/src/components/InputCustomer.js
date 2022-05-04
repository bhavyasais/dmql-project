import React,{Fragment}from "react";

const InputCustomer=()=>{


    const onSubmitForm=async(e)=>{
        e.preventDefault();
        try{

        }catch(err){
            console.error(err.message)

        }
    }
    return (<Fragment>
        <h1 className="text-center mt-5">Customer Data</h1>
        <form className="d-flex mt-5" >
            <input type="text" className="form-control"/>
            <button className="btn btn-success">Search</button>
        </form>
    </Fragment>
    );
};

export default InputCustomer;