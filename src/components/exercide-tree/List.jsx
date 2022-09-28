import React, { useRef } from "react";
import NewList from "../../models/List";
import styled from 'styled-components';
import { AiFillDelete, AiOutlinePoweroff } from "react-icons/ai";

const List = ({ contacto, add, remove, update }) => {


  const useName = useRef("");
  const useStatus = useRef("");

  function prueba(event) {
    event.preventDefault();

    const newContact = new NewList(
      useName.current.value,
      useStatus.current.value
    );

    add(newContact);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Conect</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacto.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td className="conect">
                    {contact.conect === "true" ? (
                      <Span onClick={() => update(index)} style={{ color: "#00ff00" }}>
                        <AiOutlinePoweroff />
                      </Span>
                    ) : (
                      <Span onClick={() => update(index)} style={{ color: "#010101" }}>
                        <AiOutlinePoweroff />
                      </Span>
                    )}
                  </td>
                  <Td
                    onClick={() => remove(index)}
                    style={{ color: "#ff0000" }}
                  >
                    <AiFillDelete />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form onSubmit={prueba} className="m-3">
            <div className="card w-80 p-3">
              <h1 className="text-center">CREAR CONTACTO</h1>
              <label form="name" className="form-label">
                Nombre
              </label>
              <input id="name" type="text" placeholder="name" ref={useName} />

              <label form="name" className="form-label">
                Quieres Conectarte?( true/false)
              </label>
              <input placeholder="true o false" ref={useStatus} />
              <button type="submit" className="p-2 m-3">
                AGREGAR CONTACTO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Span = styled.span`
  ${'' /* background: papayawhip; */}
  cursor: pointer
`;
const Td = styled.td`
  cursor:pointer
`

export default List;
