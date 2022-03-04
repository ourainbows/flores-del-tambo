
import React from 'react';
import "../styles/modal.css"
import { IoMdFlower } from "react-icons/io"
import { IoIosClose } from "react-icons/io"

export const Modal= ({title, list, status, setOpenModal}) => {
  // Filter items according to the status (completed or deleted)
    const filter=  list.filter(item => item[status])
  return (
    <div className='modal'>
      <div className='containerModal'>
        <div className='containerTitle'>
          <button className='close' onClick={() => setOpenModal(prevState => !prevState)}> <IoIosClose /> </button>
          <h2 id="title" className={status === "deleted" ? "iconColor-deleted" : "iconColor-completed"}>{title}</h2>
        </div>
        <div className='modalFil'>
          <div className='modalFilter'>{filter.map((item, index) =>
            <p key={index}><span><IoMdFlower className={status === "deleted" ? "iconColor-deleted" : "iconColor-completed"} /> </span>{item.title}</p>)}</div>
        </div>
      </div>
    </div>
  )
}