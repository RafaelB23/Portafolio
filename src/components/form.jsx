import React, {Fragment, useState} from "react";
import emailjs from '@emailjs/browser';

function FormFrag(){
    const [form, setForm] = useState([])
    return(
        <>
            <div className='formulario'>
                <form action='' onSubmit={(e)=>{
                        e.preventDefault();
                        const _mensaje={
                            to_name:'Rafael',
                            from_email:e.target.from_email.value,
                            from_name:e.target.from_name.value,
                            phone:e.target.phone.value,
                            message:e.target.message.value
                        }
                        setForm(_mensaje)
                        console.log(form)
                        
                        emailjs.send('default_service','template_35dnyfz',_mensaje, "8hTDr2w4iazrsD8gM")
                        .then((result) => {
                            console.log(result.text);
                            alert('Mensaje enviado.')
                        }, (error) => {
                            console.log(error.text);
                        });
                        }} >
                    <label for="email">Email 
                        <input type="email" name="from_email" id="from_email" placeholder='Enter your email...' required/>
                    </label>
                    <label for="name">Name 
                        <input type="text" name="from_name" id="from_name" placeholder='Enter your name...' required/>
                    </label>
                    <label for="tel">Phone number 
                        <input type="tel" name="phone" id="phone" placeholder='Enter your phone number...'/>
                    </label>
                    <label for="mess">Message 
                        <textarea name="message" id="message" placeholder='Enter your message...' required/>
                    </label>
                    <div className='btn'>
                        <button className='btn__cv justify__end' type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FormFrag;