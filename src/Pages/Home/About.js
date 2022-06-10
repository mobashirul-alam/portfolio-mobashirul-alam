import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div>
            <div id='about' className='w-1/2 mx-auto my-12'>
                <h1 className='text-6xl font-medium'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 175,
                            deleteSpeed: 150,
                            strings: ['Who Am I']
                        }}
                    />
                </h1>
                <hr className='w-3/4 border-green-600' />
                <div>
                    <p className='my-4'>
                        Hi, I'm seam, a junior web developer passionate about developing legendary sites worldwide. At the beginning of my computer career, I used to learn ms word, excel, PowerPoint, etc. To learn that I have to visit different kinds of websites. After gaining some knowledge about that, I was thinking, What if I could make those kinds of websites?
                    </p>
                    <p className='mb-4'>
                        Immediately, I started searching to learn web development. Then I found a legendary web development course. I enrolled and complete it on time. After that, I realized that I have to learn new things each day to do well in web development. So, I am making learning a regular habit of mine.
                    </p>
                    <p className='mb-4'>
                        Throughout this time I've learned some technologies like HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and some backend technologies like MongoDB, Express, and Node.js. And I'm passionate to learn more technologies to become a Full-stack web developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;