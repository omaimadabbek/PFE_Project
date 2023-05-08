import { SetStateAction } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  FormGroup,
  Input,

} from "reactstrap";


type valideProps = {
  detailCommande: any;
  date: string;
  setIsValidePanier: React.Dispatch<SetStateAction<boolean>>;
  setDate: React.Dispatch<SetStateAction<string>>;
  idDetailCommandeSelected: number;
  date_cmd: string;
 // totalcommande: string;
 total: number;
  setTotal: React.Dispatch<SetStateAction<number>>;
  setAdresse: React.Dispatch<SetStateAction<string>>;
  adresse: string;
  etat_commande: string;
  id_client:number;
  setIdDetailCommandeSelected: (value: SetStateAction<number>) => void;
};
export default function Valider({
  detailCommande,
  idDetailCommandeSelected,
  setIsValidePanier,
  setAdresse,
  setDate,
  date_cmd,
  //totalcommande,
  total,
  setTotal,
  adresse,
  id_client,
  etat_commande,
  setIdDetailCommandeSelected,
}: valideProps) {
   async function MaCommande() {
   
    fetch("http://localhost:5000/commandes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date_cmd: date_cmd,
        totalcommande: total,
        id_client: id_client,
        etat_commande: etat_commande,
        mdv: mdv,
        adresse: adresse,
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
    console.log("MaCommande()",MaCommande())}
  const mdv = localStorage.getItem("ModeVente");
  console.log("mdv", mdv);

  return (
    <div>
      <Button
        className="btnValider"
        style={{ marginTop: "15px", marginLeft: "5px" }}
        onClick={() => {
          setIsValidePanier(false);
        }}
      >
        {" "}
        Back
      </Button>

      <Col style={{ marginLeft: "300px", width: "100%",marginTop:"-45px"}}>
        <Card body>
          <CardTitle tag="h5" >
            <FaClipboardList /> Votre Commande Chez Dabbek
          </CardTitle>
          

          <CardText tag="h5" style={{marginTop:"8px"}}>
            <div className="d-flex justify-content-between">
              {/* pour l'affichage de mot selon modeVente  */}
              {mdv === "livraison" && <div>Livraison</div>}
              {mdv === "emporter" && <div>A Emporter</div>}
              {mdv === "sur place" && <div>Sur Place </div>}
            </div>
            
            <div>
              <Input
                id="exampleDate"
                name="date"
                placeholder="date placeholder"
                type="date"
                onChange={(e: any) => {
                  setDate(e.target.value);
                }}
                style={{marginTop:"8px"}}
              />
            </div>{" "}
          </CardText>
          

          <CardTitle tag="h5" >
            <MdOutlinePayment /> Moyens de paiement
          </CardTitle>
          <Input id="exampleSelect" name="select" type="select"
          style={{marginTop:"8px"}}>
            <option>Choisissez un moyen de paiement</option>
            <option>Espèces</option>
            <option>Carte Bancaire</option>
            <option>Transfert d'argent</option>
          </Input>
         

          {mdv === "livraison" && (
            <div>
              <CardTitle tag="h5">
                <GrLocation /> Adresse
              </CardTitle>
              <Input
                id="exampleAdresse"
                name="adresse"
                placeholder="Adresse"
                type="text"
                onChange={(e: any) => {
                  setAdresse(e.target.value);
                }}
                style={{marginTop:"8px"}}
              />
            </div>
          )}
         

          <CardTitle tag="h5" style={{marginTop:"10px"}}>Total:{total}</CardTitle>
        

        

          <Button className="btnValider" onClick={() => MaCommande()}style={{marginTop:"15px"}}>
            ma commande
          </Button>
        </Card>
      </Col>
    </div>
  );
}
