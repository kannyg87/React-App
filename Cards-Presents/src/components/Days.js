import React, { Component } from 'react'

class Days extends Component {
    
    
    render() {

            let days = ["monday","Tusday","wedensday", "Thursday","Friday","Saturday","Sunday"];

           let daysArr= days.map(day=>{
            return <li>{day}</li>
           })
       return(
        <>
        Days of the weeek:<ul>{daysArr}</ul>
        
        </>
    )
  }
}

export default Days
