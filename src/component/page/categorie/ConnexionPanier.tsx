import { SetStateAction, useState } from "react";
import "./Home.style.css";
import "./login.style.css";

import { FaShoppingCart } from "react-icons/fa";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Swal from "sweetalert2";

type connexionProps = {
  numPanier: number;
  nom_client: string;
  prenom_client: string;
  email: string;
  mot_de_passe: string;
  setMdp: React.Dispatch<React.SetStateAction<string>>;
  setNomClient: React.Dispatch<React.SetStateAction<string>>;
  setPrenomClient: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAdresse: React.Dispatch<React.SetStateAction<string>>;
  adresse: string;
  num_telephone: number;
  setNum: React.Dispatch<SetStateAction<number>>;
};
export default function Connexion({
  numPanier,
  nom_client,
  prenom_client,
  email,
  mot_de_passe,
  adresse,
  setAdresse,
  setNomClient,
  setPrenomClient,
  setEmail,
  setMdp,
  num_telephone,
  setNum,
}: connexionProps) {
  async function Connexion() {
   
    fetch("http://localhost:5000/client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom_client: nom_client,
        prenom_client: prenom_client,
        email: email,
        mot_de_passe: mot_de_passe,
        adresse: adresse,
        num_telephone: num_telephone,
      }),
    })
      .then((response) => {
        console.log(
          "🚀 ~ file: ConnexionPanier.tsx:62 ~ .then ~ response:",
          response
        );

        response.json();
      })
      .catch((error: any) => {
        console.error("There was an error!", error.message);
      });

    setModal(!modal);
  }
  // fun get
  // add condition
  function getClient() {
    fetch("http://localhost:5000/client").then(async (response) => {
      const data = await response.json();
      if (data.length > 0) {
        Swal.fire("Good job!", "You clicked the button!", "success");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }
    });
  }
  const [inscrire, setInscrire] = useState(false);
  const [identifier, setIdentifier] = useState(false);
  const [modal, setModal] = useState(false);

  const cnx = () => {
    setIdentifier(false);
    setModal(!modal);
  };
  const register = () => {
    setIdentifier(false);

    setModal(!modal);
  };

  return (
    <div
      style={{
        gridArea: "connexion / connexion / connexion / connexion",
        // overflow: "auto",
        marginBottom: "3px",
        marginLeft: "auto",
        backgroundPosition: " top 25% right 0",
        textAlign: "center",
        width: "-webkit-fill-available;",
      }}
    >
      <div
        style={{
          display: "flex",
          marginRight: "20px",
          justifyContent: "center",
        }}
      >
        <button className="buttonCnx" onClick={cnx}>
          Connexion
        </button>
        <Modal isOpen={modal} cnx={cnx}>
          {!inscrire ? (
            <>
              <ModalHeader cnx={cnx}>Votre Compte</ModalHeader>
              <ModalBody>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder=""
                      type="email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder=""
                      type="password"
                    />
                  </Col>
                </FormGroup>

                <div
                  style={{ textAlign: "center" }}
                  onClick={() => {
                    setInscrire(true);
                  }}
                >
                  Vous n'avez pas de compte ? <a href="#">s'inscrire</a>
                </div>
                <button
                  onClick={() => {
                    getClient();
                  }}
                >
                  ok
                </button>
              </ModalBody>
            </>
          ) : (
            <>
              <ModalHeader register={register}>Inscription</ModalHeader>
              <ModalBody>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>
                    Email
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder=""
                      type="email"
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>
                    Password
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder=""
                      type="password"
                      onChange={(e: any) => {
                        setMdp(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleNom" sm={2}>
                    Nom
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleNom"
                      name="nom"
                      placeholder=""
                      type="text"
                      onChange={(e: any) => {
                        setNomClient(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleNom" sm={2}>
                    Prenom
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="examplePrenom"
                      name="prenom"
                      placeholder=""
                      type="text"
                      onChange={(e: any) => {
                        setPrenomClient(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleAdresse" sm={2}>
                    Adresse
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleAdresse"
                      name="adresse"
                      placeholder=""
                      type="text"
                      onChange={(e: any) => {
                        setAdresse(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="exampleNom" sm={2}>
                    Numero
                  </Label>
                  <Col sm={10}>
                    <Input
                      id="exampleNumero"
                      name="numéro"
                      placeholder=""
                      type="text"
                      onChange={(e: any) => {
                        setNum(e.target.value);
                      }}
                    />
                  </Col>
                </FormGroup>
                <div
                  style={{ textAlign: "center" }}
                  onClick={() => {
                    setIdentifier(false);
                  }}
                >
                  Avez-vous un compte ? <a href="#">s'identifier</a>
                </div>
              </ModalBody>
              <Button
                onClick={() => {
                  
                  Connexion();
                }}
              >
                ccc
              </Button>
              <ModalFooter>
                <Button color="primary" onClick={cnx}>
                  back
                </Button>
              </ModalFooter>
            </>
          )}
        </Modal>
      

        <div style={{ fontSize: "25px" }}>
          <FaShoppingCart />
          <span
            className="cart span"
            style={{
              backgroundColor: "red",
              color: "white",
              border: "0",
              borderRadius: "50px",
              marginLeft: "5px",
            }}
          >
            {numPanier}
          </span>
        </div>
      </div>
    </div>
  );
}
