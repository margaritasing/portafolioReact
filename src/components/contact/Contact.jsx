import "./contact.css"
import Email from "../../img/email.png"
import Adress from "../../img/ubicacion.png"

import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;


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
                        Si quieres comunicarte conmigo, puedes escribirme aqui..!.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_name" id="user_name" placeholder="Nombre" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" name="user_subject" id="user_subject" placeholder="Asunto" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="email" name="user_email" id="user_email" placeholder="Correo" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} name="message" id="message"  rows="5" placeholder="Mensaje"></textarea>
                        <button>Enviar</button>
                        {done &&  "Gracias Por Tu Mensaje"}
                    </form>
                </div>
                
            </div>            
        </div>
    )
}

export default Contact
