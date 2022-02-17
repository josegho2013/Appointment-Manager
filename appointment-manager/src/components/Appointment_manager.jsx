import React, { useState } from "react";
import "../css/styles.css";

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
  const [citas, setCitas] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

  const [input, setInput] = useState({
    id: citas?.length + 1,
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !input.nombre_de_mascota ||
      !input.propietario ||
      !input.telefono ||
      !input.sintomas ||
      !input.fecha ||
      !input.hora
    ) {
      alert("Complete todos los campos");
      return;
    }

    let lista = citas;
    lista.push(input);
    setCitas(lista);
    setModalInsertar(false);

    setInput({
      id: citas?.length + 1,
      nombre_de_mascota: "",
      propietario: "",
      telefono: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  const mostrarModalEditar = (dato) => {
    setInput(dato);
    setModalEditar(true);
  };

  const cerrarModalEditar = () => {
    setModalEditar(false);
  };
  const editar = (dato) => {
    var contador = 0;
    var arreglo = citas;

    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nombre_de_mascota = dato.nombre_de_mascota;
        arreglo[contador].propietario = dato.propietario;
        arreglo[contador].fecha = dato.fecha;
        arreglo[contador].telefono = dato.telefono;
        arreglo[contador].hora = dato.hora;
        arreglo[contador].sintomas = dato.sintomas;
      }
      contador++;
    });
    setInput(arreglo);
    setModalEditar(false);
  };

  const eliminar = (dato) => {
    var opcion = window.confirm(
      "Estás Seguro que deseas Eliminar el elemento " + dato.id
    );
    if (opcion == true) {
      var contador = 0;
      var arreglo = citas;
      arreglo.map((item) => {
        if (dato.id == item.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setInput({ input: arreglo });
    }
  };

  return (
    <div>
      <div>
        <h1>Appointment Manager</h1>
        <Button
          className=" boton_registro"
          text-center
          color="success"
          onClick={() => mostrarModalInsertar()}
        >
          Registrar Nueva cita
        </Button>
      </div>
      <Container>
        <div className="container">
          <div>
            <img
              className="imagen"
              src="https://www.dalevidaatumascota.com/wp-content/uploads/2018/08/iStock-490056596-1024x683.jpg"
            />
          </div>
          <div>
            {citas.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre Mascota</th>
                    <th>Propietario</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Telefono</th>
                    <th>Sintomas</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {citas.length > 0 &&
                    citas?.map((dato) => {
                      return (
                        <tr key={dato.id}>
                          <td>{dato.id}</td>
                          <td>{dato.nombre_de_mascota}</td>
                          <td>{dato.propietario}</td>
                          <td>{dato.fecha}</td>
                          <td>{dato.hora}</td>
                          <td>{dato.telefono}</td>
                          <td>{dato.sintomas}</td>
                          <td>
                            <Button
                              color="primary"
                              onClick={() => mostrarModalEditar(dato)}
                            >
                              Editar
                            </Button>

                            <Button
                              color="danger"
                              onClick={() => eliminar(dato)}
                            >
                              Eliminar
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </Container>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Id</Label>
            <Input
              className="form-control"
              readOnly
              type="text"
              value={input.id || ""}
            />
          </FormGroup>
          <FormGroup>
            <Label>Nombre de Mascota</Label>
            <Input
              className="form-control"
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
              className="form-control"
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
              className="form-control"
              type="number"
              name="telefono"
              placeholder="ingrese telefono"
              onChange={(e) => handleChange(e)}
              value={input.telefono}
            />
          </FormGroup>
          <FormGroup>
            <Label>Fecha</Label>
            <Input
              className="form-control"
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
              className="form-control"
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
              className="form-control"
              type="tex"
              name="sintomas"
              placeholder="ingrese sintomas"
              onChange={(e) => handleChange(e)}
              value={input.sintomas}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(input)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => cerrarModalEditar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <ModalHeader> Agregar Cita</ModalHeader>
          <FormGroup>
            <Label>Id</Label>
            <Input
              className="form-control"
              readOnly
              type="text"
              value={citas?.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <Label>Nombre de Mascota</Label>
            <Input
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
              type="tex"
              name="sintomas"
              placeholder="ingrese sintomas"
              onChange={(e) => handleChange(e)}
              value={input.sintomas}
            />
            <br />
          </FormGroup>

          <Button type="submit" color="success">
            Guardar Cita
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Appointment_manager;
