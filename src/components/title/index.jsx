import { IoMdCloudDownload } from "react-icons/io";

const AboutMe = () => {
    return (
        <>
            <div className="aboutme_wrapper pt-[6rem] pb-6 bg-[#fcfcfc] flex   ">
                <div className="aboutme_container max-w-5xl m-auto flex gap-[3rem] ">
                    <div className="aboutme_description max-sm:px-4">
                        <h1 className="flex items-center  "><h1 className="text-4xl mt-1  ">Ashen Samarasekera 👋</h1></h1>
                        <div className="aboutme_image">
                            <img className="my-4" width={100} src="src/assets/images/ashensam.png" alt="" />
                        </div>
                        <p className="mt-2 leading-[25px] text-zinc-800">Hello, As an undergraduate student pursuing a BSc Degree in
                            Software Engineering at ICBT Campus(offered by Cardiff
                            Metropolitan University), I am passionate about web
                            development and committed to contributing innovative
                            solutions in the field. I am seeking opportunities to apply my skills
                            and knowledge to real-world projects.</p>
                        <button className="bg-blue-900 flex items-center gap-2 px-4 p-2 mt-3 rounded text-white hover:bg-blue-600  max-sm:mt-4">Resume <IoMdCloudDownload /></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutMe;