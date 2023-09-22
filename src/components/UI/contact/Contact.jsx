import React, { useState, useRef } from 'react'
import emailsjs from 'emailjs-com';
import containerStyle from '../style/Styles';
import validator from 'validator';




const Contact = () => {
    //debugger;

    const form = useRef(null);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [isEmailValid, setEmailValid] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
        const isEmailValid = validator.isEmail(form.current.user_email.value);
        if (!isEmailValid) {
            setEmailValid(false);
            return;
        } else {
            setEmailValid(true);
        }
        emailsjs.sendForm('service_5zwboga', 'template_lm88l4n', form.current, '3m8ph-7dQ43AT_vNL')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                setConfirmationVisible(true);
                setTimeout(() => {
                    setConfirmationVisible(false);
                }, 5000);
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <div className='container pb-16'>
            <div style={containerStyle}>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className='md:flex justify-between items-center'>

                    <div className='w-full md:w-1/2 h-300px sm:h-[450px]'>
                        <iframe title='google-maps' src="https://maps.google.com/maps?width=753&amp;height=494&amp;hl=en&amp;q=lebanon, beirut &amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className='border-0 w-full h-full' loading="lazy"
                        ></iframe>
                    </div>

                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className='w-full' ref={form} onSubmit={sendEmail}>
                            <div className='mb-5'>
                                <input type='text' name='user_name' placeholder='Enter your name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>
                            <div className='mb-5'>
                                <input type='text' name='user_email' placeholder='Enter your email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                                {!isEmailValid && (<div className="text-red-500 mt-1">Email not valid</div>)}
                            </div>
                            <div className='mb-5'>
                                <textarea type='text' name='message' rows={3} placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]' />
                            </div>

                            <button type='submit' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColortext-center ease-linear duration-150'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                {isConfirmationVisible && (<div className="confirmation-message bg-green-500 text-white p-3 rounded-md shadow-md">Thank you for contacting us. Your message has been received.</div>)}
            </div>
        </div>
    );
}

export default Contact