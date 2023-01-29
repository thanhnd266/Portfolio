

const Education = () => {

    return (
        <div className="lg:h-screen p-12 flex items-center border-b-[1px]">
            <div>
                <h1 className="text-6xl text-[#343A40] font-bold font-primary mb-8">EDUCATION</h1>
                <div className="flex justify-between">
                    <div className="pr-4">
                        <div className="font-primary text-2xl text-[#34495E] my-4">
                            <div className="my-1 text-primary font-bold">
                                <a className="text-3xl hover:text-[#fa983a]" rel="noreferrer" href="https://portal.ptit.edu.vn/" target="_blank">POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY</a>
                            </div>

                            <div>
                                <i className="fa-solid fa-graduation-cap"></i>
                                <span> · I GRADUATED WITH A BACHELOR'S DEGREE OF MULTIMEDIA COMMUNICATIONS, BUT I DEVELOPED MY CAREER AS A FRONTEND DEVELOPER.</span>
                            </div>
                        </div>

                        <div>
                            <div>
                                <i className="fa-solid fa-bookmark text-[#ffc107]"></i>
                                <span> When I was a student, I was very lucky to learn some subjects related to web programming. 
                                    Then I tried to dig deeper and really enjoyed it.
                                </span>
                            </div>
                            <div className="my-4">
                                <i className="fa-solid fa-bookmark text-[#ffc107]"></i>
                                <span> After graduated, I continued to study Computational thinking for problem solving and Object Oriented Programming course at Cybersoft.
                                </span>
                            </div>
                            <div>
                                <i className="fa-solid fa-bookmark text-[#ffc107]"></i>
                                <span> Then, I study by myself programming languages related to Frontend: 
                                    HTML, CSS, Boostrap, Tailwind, JavaScript, TypeScript, ReactJS.
                                </span>
                            </div>
                            <div className="my-4">
                                <i className="fa-solid fa-bookmark text-[#ffc107]"></i>
                                <span> In addition, I also obtained a certificate of English (TOEIC-790) during this time.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block text-primary font-primary w-1/2 mt-5 text-right">
                        <span className="block w-full text-xl font-normal">August 2017 - September 2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;