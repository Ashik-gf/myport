
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bo2wkn5', 'template_fumn8jn', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <div className=' bg-purple-500 h-[60vh] pt-8 '>
    <h2 className='text-center text-2xl font-semibold my-2 text-white'>Contact With Me</h2>
    <div className='h-1 bg-white w-full my-2'></div>
     <form className='block  h-[50vh] w-[600px] mx-auto' ref={form} onSubmit={sendEmail}>
  <div className='flex justify-center gap-4 items-center'>
  <label className='text-white text-xl font-bold'>Name</label>
    <input type="text" name="user_name"  placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
  </div>
   <div className='flex justify-center gap-4 items-center m-4'>
   <label className='text-white text-xl font-bold'>Email</label>
    <input type="text" name="user_email"  placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
   </div>
   <div className='flex justify-center gap-4 items-center m-4'>
   <label className='text-white text-xl font-bold'>Message</label>
    <textarea className="input input-bordered input-primary w-full max-w-xs"  name="message" />
   </div>
    <button className=' flex justify-center btn w-[200px] mx-auto text-xl font-bold'>Send</button>
  </form>
   </div>

  )
}

export default Contact