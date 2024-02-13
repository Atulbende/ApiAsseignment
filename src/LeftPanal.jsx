import React from 'react'
import './App.css';

export default function LeftPanal({usersData,refFun}) {
    
  return (
    <div className='leftPanal'>
       
        <ul>
        {!!usersData && usersData?.map((users)=>{
            return  <li onClick={()=>{refFun(users?.id)}}>{users?.name}</li>

        })}
  </ul>
    </div>
  )
}
