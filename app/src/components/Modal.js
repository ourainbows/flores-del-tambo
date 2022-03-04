
import React from 'react';
import "../styles/modal.css"
import {GiFlowerTwirl} from "react-icons/gi"


export const Modal= ({title, list, status, setOpenModal}) => {
    const filter=  list.filter(item => item[status])
  return (
    <div className='modal'>
        <div className='containerModal'>
            <h2 className='title'>{title}</h2> 
        <button className='close' onClick={() => setOpenModal(prevState =>!prevState)}>x</button>
            <div className='modalFilter'>{filter.map((item, index) =>
                 <p key={index}><GiFlowerTwirl className='iconColor'/>{item.title}</p>)}</div>
        </div>
    </div>
  )
}
