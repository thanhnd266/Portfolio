
//images
import Avatar from '../images/ava.png'

const NavBar = ({useScrollSection}) => {

    const aboutSection = useScrollSection('about');
    const educationSection = useScrollSection('education');
    const skillsSection = useScrollSection('skills');
    const projectsSection = useScrollSection('projects');
    const theendSection = useScrollSection('theend');

    return (
        <div>
            <div className="hidden md:flex justify-center items-center fixed top-0 left-0 bottom-0 bg-primary w-[272px]">
                <div>
                    <div className="w-full mb-4">
                        <div className="w-[180px] h-[180px] relative bg-[#66a6d8] rounded-full">
                            <img className="w-[160px] absolute top-[10px] right-[10px]" src={Avatar} alt="avatar" />    
                        </div>
                    </div>

                    <div className="text-blur text-2xl text-center font-bold font-primary">
                        <div className="py-2">
                            <span onClick={aboutSection.onClick} selected={aboutSection.selected} className="hover:text-hover cursor-pointer" href="/">ABOUT</span>
                        </div>
                        <div className="py-2">
                            <span onClick={educationSection.onClick} selected={educationSection.selected} className="hover:text-hover cursor-pointer" href="/">EDUCATION</span>
                        </div>
                        <div className="py-2">
                            <span onClick={skillsSection.onClick} selected={skillsSection.selected} className="hover:text-hover cursor-pointer" href="/">SKILLS</span>
                        </div>
                        <div className="py-2">
                            <span onClick={projectsSection.onClick} selected={projectsSection.selected} className="hover:text-hover cursor-pointer" href="/">PROJECTS</span>
                        </div>
                        <div className="py-2">
                            <span onClick={theendSection.onClick} selected={theendSection.selected} className="hover:text-hover cursor-pointer" href="/">THE END</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;