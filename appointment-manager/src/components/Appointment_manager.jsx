import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const Appointment_manager = () => {
  const [modalInsertar, setModalInsertar] = useState(false);
  const [citas, setCitas] = useState([]);

  const [input, setInput] = useState({
    nombre_de_mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };
  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    let lista = citas;
    lista.push(input);
    setCitas(lista);
  };
  return (
    <div>
      <h1>Appointment Manager</h1>

      <Button color="success" onClick={() => mostrarModalInsertar()}>
        Registrar Nueva cita
      </Button>























      

      <Modal isOpen={modalInsertar}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup>
            <Label>Nombre de Mascota</Label>
            <Input
              type="tex"
              name="nombre_de_mascota"
              placeholder="Ingrese nombre de la Mascota"
              onChange={(e) => handleChange(e)}
              value={input.nombre_de_mascota}
            />
          </FormGroup>
          <FormGroup>
            <Label>Propietario</Label>
            <Input
              type="tex"
              name="propietario"
              placeholder=" ingrese propietario"
              onChange={(e) => handleChange(e)}
              value={input.propietario}
            />
          </FormGroup>
          <FormGroup>
            <Label>Telefono</Label>
            <Input
              type="tex"
              name="telefono"
              placeholder="ingrese telefono"
              onChange={(e) => handleChange(e)}
              value={input.telefono}
            />
          </FormGroup>
          <FormGroup>
            <Label>Fecha</Label>
            <Input
              type="date"
              name="fecha"
              placeholder="ingrese fecha"
              onChange={(e) => handleChange(e)}
              value={input.fecha}
            />
          </FormGroup>
          <FormGroup>
            <Label>Hora</Label>
            <Input
              type="time"
              name="hora"
              placeholder="ingrese hora"
              onChange={(e) => handleChange(e)}
              value={input.hora}
            />
          </FormGroup>
          <FormGroup>
            <Label> Sintomas</Label>
            <textarea
              type="tex"
              name="sintomas"
              placeholder="ingrese sintomas"
              onChange={(e) => handleChange(e)}
              value={input.sintomas}
            />
          </FormGroup>
          <Button
            type="submit"
            color="success"
            onClick={() => cerrarModalInsertar()}
          >
            Guardar Cita
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Appointment_manager;
