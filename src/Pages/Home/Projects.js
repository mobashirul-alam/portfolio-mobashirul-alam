import React from 'react';
import linkIcon from '../../assets/icon/link-icon.png';
import goldenTool from '../../assets/Assignment-screenshot/golden-weight-1.png';
import fitnessPro from '../../assets/Assignment-screenshot/fitness-pro-1.png';
import proFit from '../../assets/Assignment-screenshot/pro-fit-1.png';

const Projects = () => {
    return (
        <div>
            <div class="divider text-4xl md:text-6xl lg:w-3/4 mx-auto my-12">
                Recent Projects
            </div>
            <div>
                {/* -------------- Project 1 ------------- */}
                <div class="card lg:card-side bg-base-100 shadow-2xl rounded-none my-16">
                    <img className='max-w-screen-md lg:max-w-screen-sm xl:max-w-screen-md border-2 border-red-900' src={goldenTool} alt="Project" />
                    <div class="card-body my-8">
                        <p>Full Stack Project</p>
                        <p className='card-title underline'>Golden Weight Tools</p>
                        <p>A Full Stack Tools Manufacturer Website with Fully Secured Authentication System & Secured Payment System.</p>
                        <div className='flex flex-wrap gap-1 md:gap-3'>
                            <button className='border-2 border-gray-300 p-2'>React</button>
                            <button className='border-2 border-gray-300 p-2'>Tailwind CSS</button>
                            <button className='border-2 border-gray-300 p-2'>MongoDB</button>
                            <button className='border-2 border-gray-300 p-2'>Express</button>
                        </div>
                        <a
                            className='text-blue-500 font-bold'
                            href="https://golden-weight-tools.web.app/"
                            target={'_blank'}
                            rel='noreferrer'>
                            Live Site <img src={linkIcon} alt="" className='inline' />
                        </a>
                        <div class="card-actions justify-start">
                            <button class="btn btn-accent text-white">Project Details</button>
                        </div>
                    </div>
                </div>
                {/* -------------- Project 2 ------------- */}
                <div class="flex flex-col lg:flex-row-reverse card lg:card-side bg-base-100 shadow-2xl rounded-none mb-16">
                    <img className='max-w-screen-md lg:max-w-screen-sm xl:max-w-screen-md border-2 border-red-900' src={fitnessPro} alt="Project" />
                    <div class="card-body my-8">
                        <p>Full Stack Project</p>
                        <p className='card-title underline'>Fitness Pro Equipment Warehouse</p>
                        <p>A Full Stack Warehouse Management Website with Fully Secured Authentication System.</p>
                        <div className='flex flex-wrap gap-1 md:gap-3'>
                            <button className='border-2 border-gray-300 p-2'>React</button>
                            <button className='border-2 border-gray-300 p-2'>React Bootstrap</button>
                            <button className='border-2 border-gray-300 p-2'>MongoDB</button>
                            <button className='border-2 border-gray-300 p-2'>Express</button>
                        </div>
                        <a
                            className='text-blue-500 font-bold'
                            href="https://fitness-pro-equipment-house.web.app/"
                            target={'_blank'}
                            rel='noreferrer'>
                            Live Site <img src={linkIcon} alt="" className='inline' />
                        </a>
                        <div class="card-actions justify-start">
                            <button class="btn btn-accent text-white">Project Details</button>
                        </div>
                    </div>
                </div>
                {/* -------------- Project 3 ------------- */}
                <div class="card lg:card-side bg-base-100 shadow-2xl rounded-none mb-16">
                    <img className='max-w-screen-md lg:max-w-screen-sm xl:max-w-screen-md border-2 border-red-900' src={proFit} alt="Project" />
                    <div class="card-body my-8">
                        <p>Front End Project</p>
                        <p className='card-title underline'>Pro-Fit Personal Trainer</p>
                        <p>A Front End Independent Service Provider Website for a Personal Fitness Trainer.</p>
                        <div className='flex flex-wrap gap-1 md:gap-3 '>
                            <button className='border-2 border-gray-300 p-2'>React</button>
                            <button className='border-2 border-gray-300 p-2'>Bootstrap</button>
                            <button className='border-2 border-gray-300 p-1'>React Bootstrap</button>
                            <button className='border-2 border-gray-300 p-2'>Firebase</button>
                        </div>
                        <a
                            className='text-blue-500 font-bold'
                            href="https://pro-fit-personal-trainer.web.app/"
                            target={'_blank'}
                            rel='noreferrer'>
                            Live Site <img src={linkIcon} alt="" className='inline' />
                        </a>
                        <div class="card-actions justify-start">
                            <button class="btn btn-accent text-white">Project Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;