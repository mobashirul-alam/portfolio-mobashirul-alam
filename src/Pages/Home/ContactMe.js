import React, { useRef } from 'react';
import email from '../../assets/icon/Mail-icon.png'
import phone from '../../assets/icon/Phone-icon.png'
import github from '../../assets/icon/web-github-icon.png'
import linkedin from '../../assets/icon/linkedin-icon.png'
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oop3qpn', 'template_rldi6tc', form.current, 'bzd5LhQfWsX0DWGLK')
            .then((result) => {
                console.log(result.text);
                if (result.text === 'OK') {
                    e.target.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div id='contactMe' className='min-h-[85vh] mt-12'>
            <div class="divider text-4xl md:text-6xl lg:w-1/2 mx-auto my-12">Contact Me</div>
            <div class="flex flex-col w-full lg:flex-row ">
                <div class="flex-1 text-center lg:ml-20 mb-12 lg:mb-0">
                    <h1 className='text-3xl md:text-4xl mb-4 md:font-semibold'>Send me a message!</h1>
                    <p className='text-xl font-normal md:w-2/3 mx-auto'>
                        Got a question or proposal, or just want to say hello? Go Ahead
                    </p>
                    <form ref={form} className='mt-12 form-control' onSubmit={handleSubmit}>
                        <input
                            name='user_name'
                            type="text"
                            placeholder="Your Name"
                            class="input input-bordered w-full max-w-sm mb-2"
                        />
                        <input
                            name='user_email'
                            type="email"
                            placeholder="Your Email Address"
                            class="input input-bordered w-full max-w-sm mb-2"
                        />
                        <textarea
                            name='user_message'
                            class="textarea textarea-bordered w-full max-w-sm"
                            placeholder="Message..."
                        ></textarea>
                        <br />
                        <input type="submit" value="Submit" className='btn btn-block max-w-sm' />
                    </form>
                </div>
                <div class="flex-1 lg:ml-48">
                    <h1 className='text-3xl md:text-4xl mb-4 md:font-semibold text-center md:text-left'>Get In Touch</h1>
                    <p className='text-xl font-normal lg:w-2/3 text-center md:text-left'>
                        I am ready to help you with any of your web-related projects.
                    </p>
                    <div className='mt-4 md:mt-10'>
                        <p className='md:mb-5'>
                            <img src={email} alt="" className='inline mr-6' />
                            mobashirulalamseam@gmail.com
                        </p>
                        <p className='md:mb-5'>
                            <img src={phone} alt="" className='inline mr-6' />
                            +8801643424044
                        </p>
                        <p className='md:mb-5'>
                            <img src={github} alt="" className='inline mr-6' />
                            <a
                                href="https://github.com/mobashirul-alam"
                                target='_blank'
                                rel="noreferrer">
                                Github/mobashirul
                            </a>
                        </p>
                        <p className='md:mb-5'>
                            <img src={linkedin} alt="" className='inline mr-6' />
                            <a
                                href="https://www.linkedin.com/in/mobashirul-alam-seam/"
                                target='_blank'
                                rel="noreferrer">
                                LinkedIn/mobashirul
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;