import React from 'react'

const Contacts = (props) => {
  return (
    <>

    <h1>{props.fristNAme} {props.lastName} </h1> <br />
    <h2> {props.phone}  </h2><br />
    <h3> {props.email}</h3><br />
     
        
    </>
  )
}




export default Contacts
