

const Skills = () => {

    return (
        <div className="lg:h-screen p-12 flex items-center border-b-[1px]">
            <div>
                <h1 className="text-6xl text-[#343A40] font-bold font-primary mb-8">SKILLS</h1>
                <div className="font-primary text-[#343A40] text-2xl">
                    <h2>PROGRAMMING LANGUAGES & TOOLS</h2>
                    <div className="">
                        <div className="block lg:flex my-6">
                            <div className="flex">
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" title="HTML" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" title="CSS" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" title="JavaScript" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" title="ReactJS" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://iconape.com/wp-content/png_logo_vector/typescript.png" title="TypesCript" />
                                </div>
                            </div>
                            <div className="flex mt-6 lg:mt-0">
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://cdn.iconscout.com/icon/free/png-256/bootstrap-6-1175203.png" title="Boostrap" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" title="Tailwind" />
                                </div>
                                <div className="mr-6">
                                    <img className="w-12 h-12" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" title="GitHub" />
                                </div>
                                <div className="mr-6">
                                    <i className="text-[48px] fab fa-npm" title="npm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[#343A40] text-2xl my-8">
                    <h2 className="font-primary">WORKFLOW</h2>
                    <div className="text-lg">
                        <div>
                            <i className="fa-solid fa-check"></i>
                            <span> Git, Github for Teamwork</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-check"></i>
                            <span> Responsive Web Design</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-check"></i>
                            <span> Adobe Photoshop, Adobe Illustrator to design</span>
                        </div>
                        <div>
                            <i className="fa-solid fa-check"></i>
                            <span> Adobe Premiere Pro to edit video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;