import React, { useState } from "react";
import { BsListCheck } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import "../styles/navbar.css";
import logo from "../assets/Logoflor.png";
import { Modal } from "./Modal.js";

const Navbar = ({ list }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", status: "" });
  const handleModal = (statusTitle, statusClick) => {
    setOpenModal(!openModal);
    setModalInfo({ title: statusTitle, status: statusClick });
  };
  return (
    <div className="navbar">
      <div className="nav">
        <h1>Flores del Tambo</h1>
        <div className="icons">
          <BsListCheck />
          <MdDelete />
        </div>
      </div>
      <img src={logo} alt={logo} />
      {openModal ? (
        <Modal
          setOpenModal={setOpenModal}
          title={modalInfo.title}
          status={modalInfo.status}
          list={list}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
