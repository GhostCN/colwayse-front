import {Button, Modal, CloseButton, Image, Form} from "react-bootstrap";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

const ModalCenter=(props)=>{
  const {handleSubmit,reset,register,formState:{errors}} =useForm()
  const onSubmit=async (data)=>{
    const bodyRequest={};
    bodyRequest.data=data
    bodyRequest.shoes=props.shoes
    const response=await fetch('/api/hello',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRequest),
    })
    reset();
    response.status === 200 && props.onHide(!props.onHide)
  }
  useEffect(()=>{
  console.log(props.shoes)
  },[])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex">
        <h3 className="font-italic text-center" style={{color:"#000"}}>Merci de bien renseigner vos informations</h3>
        <CloseButton className="btn btn-light" onClick={props.onHide}>X</CloseButton>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-md-5 mt-3 d-flex align-items-center flex-column d-md-flex" style={{gap:"3em"}}>
          <div className="d-md-flex" style={{gap:"3em"}}>
            <div className="d-flex flex-column">
              <Form.Control
                type="text"
                placeholder="Votre Prenom"
                style={{background:"white"}}
                {...register("prenom",{required:true,pattern:/^(?!\s*$)[a-zA-Z ]+$/})}
                aria-invalid={errors.prenom ? "true":"false"}
                className="mb-2"
              />
              {errors?.prenom?.type==="required" && <span style={{color:"#f25862"}} >Veuillez renseigner ce champs</span> || errors?.prenom?.type==="pattern"&&
              <span style={{color:"#f25862"}} >Veuillez verifer votre saisie</span>
              }
            </div>
        <div className="d-flex flex-column d-flex  d-md-flex d-md-flex ">
          <Form.Control
            type="text"
            placeholder="Votre nom"
            style={{background:"white"}}
            {...register("nom",{required:true,pattern:/^[A-Za-z']+$/})}
            aria-invalid={errors.nom===true ? "true":"false"}
            className="mb-3"
          />
          {errors?.nom?.type==="required" && <span style={{color:"#f25862"}} >Veuillez renseigner ce champs</span> || errors?.nom?.type==="pattern"&&
          <span style={{color:"#f25862"}} >Veuillez verifer votre saisie</span>
          }
        </div>

          </div>
          <div className="d-md-flex" style={{gap:"3em"}}>
            <div className="d-flex flex-column">
              <Form.Control
                type="text"
                placeholder="Votre adresse"
                style={{background:"white"}}
                {...register("adresse",{required:true,pattern:/^(?!\s*$)[a-zA-Z0-9 '-]+$/})}
                aria-invalid={errors.adresse ===true ? "true":"false"}
                className="mb-3"
              />
              {errors?.adresse?.type==="required" && <span style={{color:"#f25862"}} >Veuillez renseigner ce champs</span> || errors?.adresse?.type==="pattern"&&
                <span style={{color:"#f25862"}} >Veuillez verifer votre saisie</span>
              }
            </div>
            <div className="d-flex flex-column">
              <Form.Control
                type="text"
                placeholder="Votre numéro de tel"
                style={{background:"white"}}
                {...register("numero",{required:true,pattern:/^(78|77|76|70)[0-9]{7}$/})}
                aria-invalid={errors.numero===true ? "true":"false"}
                className="mb-3"
              />
              {errors?.numero?.type==="required" && <span style={{color:"#f25862"}} >Veuillez renseigner ce champs</span> || errors?.numero?.type==="pattern" &&
                <span style={{color:"#f25862"}} >Veuillez verifer votre saisie</span>
              }
            </div>
          </div>
            <div className="d-md-flex d-flex" style={{gap:"2em"}}>
              <Form.Group controlId="formBasicCheckbox" className={'d-flex'} style={{placeItems:"center"}}>
                <Form.Check type="radio" label="Orange Money" {...register("modePaiement",{})} value="orangeMoney"/>
                <Image src={'/orange-money.png'} width="45vw"/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className={'d-flex'} style={{placeItems:"center"}}>
                <Form.Check type="radio" label="Wave Money" className="mr-1" {...register("modePaiement")} value="wave"/>
                <Image src={'/wave-money.png'} width="30vw"/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className={'d-flex'} style={{placeItems:"center"}}>
                <Form.Check type="radio" label="A la livraison" {...register("modePaiement")} value="a la livraison"/>
                <Image src={'/livraison.jpg'} width="45vw"/>
              </Form.Group>
            </div>
          <Button  variant={"light"}  className="btn btn-outline-light btn-slider d-flex justify-content-center w-md-25 w-100 mt-3" type={"submit"}>Valider</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-outline-light" style={{backgroundColor:"#f25862"}} variant="outline-secondary">Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalCenter
