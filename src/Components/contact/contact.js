import React, {useState} from 'react';
import emailjs from "@emailjs/browser";
import './contact.css'

export default function Contact() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");
 const [submitBtn, setSubmitBtn] = useState("Contact");

 // Initializing Email js
  emailjs.init("HqD4dLMc7zDcCjieH");
  const serviceID = "service_745uhnj";
  const templateID = "template_vt6rnhd";
  const publicKey ="HqD4dLMc7zDcCjieH";
  const templateParams = {
    from_name: name,
    reply_to: email,
    subject,
    message,
    to_name: "DevKruz"

  };
  
  
  const onSubmit =  ()=> {
    if(name == "" || email == "" || subject == "" || message == "") {
         alert("Please Complete The Form");
         return;
    };
     setSubmitBtn("...Contacting");
    emailjs.send(serviceID, templateID, templateParams, publicKey).then((res)=> {
      setSubmitBtn("Message Sent");
      setTimeout(()=> {
        setSubmitBtn("Contact");
      },1000);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("")
      console.log(res);
    }).catch(err=> {
         alert("Error Try Again");
         console.log(err);
    });
      
  };

  return (
    <div id="contact" className="contact-container">
        <h3>Contact</h3>
        <h1>What Can I Help You With</h1>
         <div className="contact-form">
           <div className="form-group">
              <label htmlFor="name">Name</label>
               <input id="name" type="text" 
               onChange={(e)=>setName(e.target.value)}
               value={name} 
               placeholder="Name"/>
           </div>
           <div className="form-group">
              <label htmlFor="email">Email Address</label>
               <input id="email" type="email"  
               onChange={(e)=>setEmail(e.target.value)} 
               value={email}
               placeholder="Email Address"/>
           </div>
           <div className="form-group">
              <label htmlFor="subject"> Subject</label>
               <input id="subject" type="text" 
                onChange={(e)=>setSubject(e.target.value)} 
                value={subject}
                placeholder="subject"/>
           </div>
           <div className="form-group">
              <label htmlFor="message"> Message</label>
               <textarea id="message" type="text"  
                onChange={(e)=>setMessage(e.target.value)} 
                value={message}
                placeholder="Enter Your Message Here"/>
           </div>
           <input className="btn" onClick={()=> onSubmit()} type="submit" value={submitBtn} />
         </div>
    </div>
  );
}
