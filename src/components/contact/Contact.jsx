import "./contact.css"
import Whatsapp from "../../img/whatsapp.png"
import Email from "../../img/email.png"
import Adress from "../../img/ubicacion.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs
        .sendForm('service_qblzosg', 'template_bgrpau6', formRef.current, 'user_Uk90Ay7EhccDNSXN2nHg5')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contactos</h1>
                    <div className="c-info">
                       <div className="c-info-item">
                           <img src={Whatsapp} alt="" className="c-icon"/>
                           +54 011-47856932
                       </div>
                       <div className="c-info-item">
                           <img src={Email} alt="" className="c-icon"/>
                           libiamfreitesm@gmail.com
                       </div>
                       <div className="c-info-item">
                           <img src={Adress} alt="" className="c-icon"/>
                           Argentina/Buenos Aires
                       </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Si quieres saber mas de mi escribeme..!.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name="user_name" id="user_name" placeholder="Nombre" />
                        <input type="text" name="user_subject" id="user_subject" placeholder="Asunto" />
                        <input type="email" name="user_email" id="user_email" placeholder="Correo" />
                        <textarea name="message" id="message"  rows="5" placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                        {done &&  "Gracias Por Tu Mensaje"}
                    </form>
                </div>
                
            </div>            
        </div>
    )
}

export default Contact
