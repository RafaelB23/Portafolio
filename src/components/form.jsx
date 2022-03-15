import React, {Fragment, useState} from "react";

function FormFrag(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mess, setMess] = useState('');
    const [form, setForm] = useState([email, name, phone, mess])
    return(
        <>
            <div className='formulario'>
                <form action='' onChange={(e)=>{
                    
                    const data = {
                        email,
                        name,
                        phone,
                        mess
                    }
                    setForm(data)
                    console.log(form)
                    // console.log(form['name'])
                    }} onSubmit={(e)=>{
                        e.preventDefault();
                        console.log(form)}} >
                    <label for="email">Email 
                        <input type="email" name="email" id="email" placeholder='Enter your email...' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <label for="name">Name 
                        <input type="text" name="name" id="name" placeholder='Enter your name...' onChange={(e)=>{setName(e.target.value)}}/>
                    </label>
                    <label for="tel">Phone number 
                        <input type="tel" name="tel" id="tel" placeholder='Enter your phone number...' onChange={(e)=>{setPhone(e.target.value)}}/>
                    </label>
                    <label for="mess">Message 
                        <textarea name="mess" id="mess" placeholder='Enter your message...' onChange={(e)=>{setMess(e.target.value)}}/>
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