import { useState } from "react";
import "./PedidoNovia.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import florcitas from "../../assets/flowers-yellow.svg";

const PedidoNovia = () => {

    const [modalShow, setModalShow] = useState(false);
    const [modalShowNo, setModalShowNo] = useState(false);
  
    function Si(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src="https://media.giphy.com/media/waCWiXgm8dDkTggARm/giphy.gif"
              alt=""
            />
          </Modal.Body>
        </Modal>
      );
    }
    function No(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src="https://media.giphy.com/media/pQYq7Nav9HHwYZ9IOC/giphy.gif"
              alt=""
            />
          </Modal.Body>
        </Modal>
      );
    }

  return (
    <>
    <section className="poesia container">
        <h2 className="poesiaText px-5">
          Tantas cosas por decirte y tan pocas que salen de mi boca. Deberías
          aprender a leer mis ojos cuando te miro.
        </h2>
        <FontAwesomeIcon icon={faChevronDown} className="arrowDown" />
        <div className="contenedorFlores">
          <img src={florcitas} className="flores" />
          <img src={florcitas} className="flores" />
          <img src={florcitas} className="flores" />
          <img src={florcitas} className="flores" />
          <img src={florcitas} className="flores" />
        </div>
      </section>
      <section className="contenedorPatrick">
        <h2 className="poesiaText2 text-center">Para dejar de alargarla...</h2>
        <h2 className="poesiaText2 text-center">
          Hace mucho queria preguntarte una cosita...
        </h2>
        <img src="https://i.imgur.com/Nt7I7oP.png" className="patrick" />
        <FontAwesomeIcon icon={faChevronDown} className="arrowDown" />
      </section>
      <section className="laPregunta">
        <h2 className="poesiaText2 text-center px-3">Querés ser mi novia?</h2>
        <div className="w-100 d-flex justify-content-center gap-3">
          <Button
            variant="dark"
            className="w-25"
            onClick={() => setModalShow(true)}
          >
            Si
          </Button>
          <Button
            variant="dark"
            title="No funciona este botón, que lastima xd"
            className="w-25"
            onClick={() => setModalShowNo(true)}
            disabled
          >
            No
          </Button>
        </div>
        <Si show={modalShow} onHide={() => setModalShow(false)} />
        <No show={modalShowNo} onHide={() => setModalShowNo(false)} />
      </section>
      </>
    )
}

export default PedidoNovia