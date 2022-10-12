import {BiMailSend, BiPhone} from "react-icons/bi";
import {BsInstagram, BsLinkedin} from "react-icons/bs";

const Footer=()=>{
  return (
    <div className="footer mt-5" id="footer">
       <div className="row container info">
         <div className="col col-md-6">
            <div className="personal-info">
              <span className="font-weight-bold font-italic" >COLWAYSE STORE</span>
              <ul>
                <li><BiPhone size={15} className="icone"/> <a className="text-white" href="tel:+221777667971"> +221 76 762 32 36</a></li>
                <li><BsInstagram size={15} className="icone"/> <a className="text-white" href="https://www.instagram.com/invites/contact/?i=13tdoq4nqeurf&utm_content=oyxp8of">Page Instagram</a></li>
                <li><BiMailSend size={15} className="icone"/> <a className="text-white" href="mailto:mbackesene93@gmail.com"> mbackesene93@gmail.com</a></li>
                <li><BsLinkedin size={15} className="icone"/> <a href="https://www.linkedin.com/in/cheikh-mbacke-sene-3b2150164/" className="text-white">https://www.linkedin.com/in/cheikh-mbacke-sene</a></li>
              </ul>
            </div>
         </div>
         <div className="col col-md-6" style={{paddingLeft:"20%"}}>
            <div className="d-flex justify-content-between">
              <a style={{borderTop:"1px solid #eee"}} href="" className="text-white text-decoration-none">Home</a>
              <a style={{borderTop:"1px solid #eee"}} href="" className="text-white text-decoration-none">Shop</a>
              <a style={{borderTop:"1px solid #eee"}} href="" className="text-white text-decoration-none">Contact</a>
            </div>
         </div>
       </div>
    </div>
  )
}
export default Footer
