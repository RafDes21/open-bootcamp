import React, { useState } from "react";
import List from "./List";

// En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
// Mostrar contacto.
// Crear contacto.
// Eliminar contacto.
// Cambiar el estado del contacto entre Conectado y Desconectado.

const HomeList = () => {
  const lista = [
    { id: 1, name: "claudio", conect: "false" },
    { id: 2, name: "Orlando", conect: "true" },
  ];
  const [contacto, setContacto] = useState(lista);

  const add = (newContact) => {
    const list = [...contacto];
    const id = list.length - 1;
    const newContacto = {
      id: id + 1,
      ...newContact,
    };
    list.push(newContacto);
    setContacto(list);
  };

  const remove = (id) => {
    const contact = contacto[id];
    const list = [...contacto];
    list.splice(contact, 1);
    setContacto(list);
  };

  const update = (id) => {
    const idContact = parseInt(id);
    const newArray = contacto;
    const updateContact = newArray.find(
      (contact) => contact.id - 1 === idContact
    );
    console.log(updateContact);
    if (updateContact.conect === "true") {
      updateContact.conect = "false";
      const updateArray = newArray;
      setContacto([...updateArray]);
    } else {
      updateContact.conect = "true";
      const updateArray = newArray;
      setContacto([...updateArray]);
    }
  };

  return (
    <div>
      <List contacto={contacto} add={add} remove={remove} update={update} />
    </div>
  );
};

export default HomeList;
