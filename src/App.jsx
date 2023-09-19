import { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
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
      <section className="poesia">
        <h2 className="poesiaText px-5">
          Tantas cosas por decirte y tan pocas que salen de mi boca. Deberías
          aprender a leer mis ojos cuando te miro.
        </h2>
        <img src="/src/assets/nav-arrow-down.svg" className="arrowDown" />
        <div className="contenedorFlores">
          <img src="/src/assets/flowers-yellow.svg" className="flores" />
          <img src="/src/assets/flowers-yellow.svg" className="flores" />
          <img src="/src/assets/flowers-yellow.svg" className="flores" />
          <img src="/src/assets/flowers-yellow.svg" className="flores" />
          <img src="/src/assets/flowers-yellow.svg" className="flores" />
        </div>
      </section>
      <section className="laPregunta">
        <h2 className="poesiaText2 text-center">Para dejar de alargarla...</h2>
        <h2 className="poesiaText2 text-center">
          Hace mucho queria preguntarte una cosita...
        </h2>
        <img src="https://i.imgur.com/Nt7I7oP.png" className="patrick" />
        <img src="/src/assets/nav-arrow-down.svg" className="arrowDown" />
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
          >
            No
          </Button>
        </div>
        <Si show={modalShow} onHide={() => setModalShow(false)} />
        <No show={modalShowNo} onHide={() => setModalShowNo(false)} />
      </section>
    </>
  );
}

export default App;
