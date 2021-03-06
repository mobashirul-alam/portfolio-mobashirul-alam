import React from 'react';
import manWithLaptop from '../../assets/images/man-with-laptop.svg';
import resume from '../../assets/Mobashirul-Alam-Seam-Resume.pdf';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div class="hero min-h-[90vh]">
            <div class="hero-content flex-col items-center lg:flex-row-reverse lg:justify-around w-full px-0">
                <img src={manWithLaptop} class="max-w-sm md:max-w-md" alt='' />
                <div>
                    <h3 className='mb-2 ml-1'>Hi there, I'm</h3>
                    <h1 class="text-5xl md:text-7xl font-bold">MOBASHIRUL <br /> ALAM SEAM</h1>
                    <h2 className='text-xl md:text-2xl underline'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 'natural',
                                strings: ['JUNIOR WEB DEVELOPER']
                            }}
                        />

                    </h2>
                    <p class="py-2 md:py-4">
                        I'm a Junior Web Developer with front-end along with <br /> back-end development skills.
                    </p>
                    <a href={resume} className="btn" download>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;