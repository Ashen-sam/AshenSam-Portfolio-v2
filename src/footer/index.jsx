import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const Footer = () => {
    return (
        <>
            <div className="footer_wrapper bg-blue-950 w-full p-4">
                <div className="footer_container m-auto max-w-5xl text-white text-sm flex justify-between max-sm:flex-col items-center ">
                    <h1> Developed By : Ashen Sam </h1>
                    <h1 className="flex items-center gap-4"> Technologies : <h1 className="flex gap-3"><FaReact /> <BiLogoTailwindCss /></h1></h1>
                </div>
            </div>
        </>
    )
}
export default Footer;