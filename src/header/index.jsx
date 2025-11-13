import { useEffect, useState } from 'react';
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolling
                ? 'bg-blue-950 shadow-lg'
                : 'bg-white/80 backdrop-blur-sm shadow-md'
                }`}>
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className={`text-xl font-bold transition-colors ${scrolling ? 'text-white' : 'text-blue-900'
                                }`}>
                                Ashen Sam
                            </h1>
                        </div>
                        <ul className="flex items-center gap-4">
                            <li>
                                <a
                                    href="https://github.com/Ashen-sam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-2xl transition-all hover:scale-110 ${scrolling
                                        ? 'text-white hover:text-blue-300'
                                        : 'text-blue-900 hover:text-blue-600'
                                        }`}
                                    aria-label="GitHub Profile"
                                >
                                    <AiOutlineGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-2xl transition-all hover:scale-110 ${scrolling
                                        ? 'text-white hover:text-blue-300'
                                        : 'text-blue-900 hover:text-blue-600'
                                        }`}
                                    aria-label="LinkedIn Profile"
                                >
                                    <AiFillLinkedin />
                                </a>
                            </li>
                            <li className=' flex'>
                                <button
                                    onClick={handleOpen}
                                    className={`text-2xl transition-all hover:scale-110 ${scrolling
                                        ? 'text-white hover:text-blue-300'
                                        : 'text-blue-900 hover:text-blue-600'
                                        }`}
                                    aria-label="WhatsApp Contact"
                                >
                                    <FaWhatsapp />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                    onClick={handleClose}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Close Modal"
                        >
                            <IoClose className="text-2xl" />
                        </button>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <FaWhatsapp className="text-white text-3xl" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                0774728548
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Hey! Send me a message to get in touch
                            </p>
                            <a
                                href="https://wa.me/94774728548"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>Open WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-scale-in {
                    animation: scale-in 0.2s ease-out;
                }
            `}</style>
        </>
    );
};

export default NavigationBar;
