import React from 'react';
import { useState, useEffect } from 'react';
import '../../src/index.css'
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa";
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [scrolling, setScrolling] = useState(false);
    const [number, setNumber] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header_wrapper p-4 ${scrolling ? 'bg-blue-950' : 'bg-[#f1f1f1]'} fixed right-0 left-0 transition-[1s] shadow-md z-10`}>
                <div className="header_container max-w-5xl flex items-center justify-between m-auto">
                    <div className="header_logo text-gray-900  text-lg ">
                        <h1 className={`text-[1rem] ${scrolling ? 'text-[whitesmoke] ' : 'text-blue-900'} `}>Ashen Sam</h1>
                    </div>
                    <ul className="header_link flex justify-center items-center gap-4 text-[1.5rem] text-gray-900 ">
                        <li className={` ${scrolling ? 'text-[whitesmoke] ' : 'text-blue-900'}  hover:text-blue-500 cursor-pointer`}><Link target='_blank' to='https://github.com/Ashen-sam'><AiOutlineGithub /></Link></li>
                        <li className={` ${scrolling ? 'text-[whitesmoke] ' : 'text-blue-900'}  hover:text-blue-500 cursor-pointer`}><Link target='_blank' to='https://www.linkedin.com/in/ashen-samarasekera-08354a249/'><AiFillLinkedin /></Link></li>
                        <li onClick={handleOpen} className={` ${scrolling ? 'text-[whitesmoke] ' : 'text-blue-900'}  hover:text-blue-500 cursor-pointer`}><FaWhatsapp /></li>
                        <li>{number ? '07774728548' : ''}</li>
                    </ul>
                </div>
            </div >
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='popup bg-blue-950  px-[3rem] py-[2rem] max-w-5xl absolute top-[2rem] left-1/2 -translate-x-1/2 translate-y-1/2 border-none text-center transition-all'>
                        <h2 className='text-3xl my-3 text-white '>0774728548</h2>
                        <h1 className='text-xl my-3 text-white ' id="modal-modal-description" >
                            Hey guys send me some message to contact me 👋
                        </h1>
                    </div>
                </Modal>
            </div>
        </>
    );
};
export default NavigationBar;
