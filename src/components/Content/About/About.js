
import Avatar from '../../../images/ava.png'
const About = () => {

    return (
        <div className="lg:h-screen p-8 md:p-12 flex items-center border-b-[1px]">
            <div>
                <div className="md:hidden w-full flex justify-center mb-4">
                    <div className="w-[180px] h-[180px] relative bg-[#66a6d8] rounded-full">
                        <img className="w-[160px] absolute top-[10px] right-[10px]" src={Avatar} alt="avatar" />    
                    </div>
                </div>
                <h1 className="text-6xl md:text-8xl text-[#343A40] font-bold font-primary">
                    Nguyễn Duy 
                    <span className="text-primary hover:text-[#fa983a]"> Thành</span>
                </h1>
                <div className="font-primary text-2xl text-[#34495E] my-4">
                    <div className="my-1">
                        <i className="fa-solid fa-address-card"></i>
                        <span> · FRONTEND WEB DEVELOPER</span>
                    </div>

                    <div>
                        <i className="fa-solid fa-map"></i>
                        <span> · CAU GIAY DISTRICT, HANOI CITY</span>
                    </div>
                </div>

                <div className="text-[#34495E]">
                    <h2 className="text-xl font-semibold mb-2">Welcome to visit my CV online!</h2>
                    <span>"I love to learn and find out interesting things about Front-end stuffs. For this reason, I'm looking for position as a front-end developer, to improve my skill and experience. In addition, I also want to learn more things about Back-end. Over past 1 years, I have primarily worked with ReactJs, AngularJs and ExpressJs for projects that specialize in enterprise web applications."</span>
                </div>

                <div className="text-[#34495E] my-6">
                    <h2 className="text-lg font-semibold">You can contact me via: </h2>
                    <div className="mt-1">
                        <span>Phone number: </span>
                        <a className="text-primary" href="tel:0966211059">0966211059</a>
                    </div>

                    <div>
                        <span>Email: ndthanh0206@gmail.com</span>
                    </div>
                </div>

                <div className="flex text-white text-2xl">
                    <a className="flex items-center justify-center bg-[#495057] w-14 h-14 mr-4 rounded-full hover:bg-[#fa983a]" href="https://www.linkedin.com/in/duy-thanh-602239231/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    {/* <a className="flex items-center justify-center bg-[#495057] w-14 h-14 mr-4 rounded-full hover:bg-[#fa983a]" href="https://www.facebook.com/ndt2699/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a> */}
                    <a className="flex items-center justify-center bg-[#495057] w-14 h-14 mr-4 rounded-full hover:bg-[#fa983a]" href="https://github.com/ZzuyThanhzZ" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    {/* <a className="flex items-center justify-center bg-[#495057] w-14 h-14 mr-4 rounded-full hover:bg-[#fa983a]" href="https://discord.gg/MKFjEkrG" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-discord"></i>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default About;