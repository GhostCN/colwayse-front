import {Button, Modal, CloseButton, Image} from "react-bootstrap";

const ModalCenter=(props)=>{

  const CustomBtn = ({text,icon}) => {
    return (
      <div className="d-flex justify-content-between align-items-center border p-4 mb-4 container btn-slider w-md-45 w-75" style={{borderRadius:50,width:"45%",cursor:"pointer"}}>
        <h4>{text}</h4>
        <Image src={icon} alt="Empty" style={{width:50}} />
      </div>
    )
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex">
        <h3 className="font-italic text-center" style={{color:"#f25862"}}>Choisissez votre mode de paiement</h3>
        <CloseButton className="btn btn-light" onClick={props.onHide}>X</CloseButton>
      </Modal.Header>
      <Modal.Body>

        <div className="d-flex flex-column container">
         <CustomBtn text="Orange Money" icon="/orange-money.png"/>
         <CustomBtn text="Wave Money" icon="/wave-money.png"/>
         <CustomBtn text="A la livraison" icon="/livraison.jpg"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-outline-light btn-slider" variant="outline-secondary">Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCenter
