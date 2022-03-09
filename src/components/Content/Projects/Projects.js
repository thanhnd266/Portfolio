
//images
import Rdbmovie from '../../../images/rdbmovie.jpg';
import PhotoGallery from '../../../images/photogallery.jpg'
import Forkify from '../../../images/forkify.jpg';
import Bankist from '../../../images/bankist.jpg';
import Todos from '../../../images/todos.jpg';
import Music4m from '../../../images/music4m.jpg';
import Workout from '../../../images/Workout.jpg';
import GuessNum from '../../../images/guessnum.jpg';
import RollingDice from '../../../images/rollingdice.jpg';
import Coffee from '../../../images/coffee.jpg';

const Projects = ({elementRef}) => {

    return (
        <div ref={elementRef} className="p-12 flex items-center border-b-[1px]">
            <div className="w-full">
                <h1 className="text-6xl text-[#343A40] font-bold font-primary mb-8">PROJECTS</h1>
                <div className="font-primary text-[#343A40] text-2xl">
                    <h2>For about a year, I have been developing many websites. Here are some of my favorites.</h2>
                </div>
                <div className="w-full xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://rdbmovie.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Rdbmovie} alt="Rdbmovie" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Rdb Movie</h2>
                        <p className="my-2">Build an online database about movies for movie lover (not for business). Users can watch and read all the information about trending, polular or upcoming movies.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            ReactJS, Create React App, React hooks, Styled-components, React Router, Swiper.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://rdbmovie.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/WatchMovie
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80 border-2 rounded-xl">
                        <a href="https://photogalleryndt.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={PhotoGallery} alt="PhotoGallery" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">PhotoGallery</h2>
                        <p className="my-2">Build an online image gallery. This web can search and download images by topic.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript, ReactJs, Create React App, React hooks.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://photogalleryndt.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/PhotoGallery
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://forkify-ndt26.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Forkify} alt="Forkify" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Forkify</h2>
                        <p className="my-2">ForkifyDemo is a website for searching for recipes. There are thousands of recipes for cuisines from around the world. In addition, Forkify also helps you to store your own recipes.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, Scss, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://forkify-ndt26.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/forkify-ndt
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://ndtbankist.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Bankist} alt="Bankist" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Bankist Application</h2>
                        <p className="my-2">Build a demo website about banking. Users can login with demo account and manage their finances.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Accounts: </span>
                            js-1111, ndt-2222, mm-3333, ew-4444.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://ndtbankist.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/bankist
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://music4m.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Music4m} alt="Music Player" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Music Player</h2>
                        <p className="my-2">Build a web application to listen my favourite songs.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://music4m.netlify.app/
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://todojob.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Todos} alt="Todos" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Todos application</h2>
                        <p className="my-2">Build a web application to manage user's to-do list.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://todojob.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/todos
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://workoutmap123.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Workout} alt="Workout" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Workout map</h2>
                        <p className="my-2">Build a mini web to check list and track exercise activity on map.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://workoutmap123.netlify.app/
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://samwylecoffe.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={Coffee} alt="Coffee Samwyle" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Coffee Samwyle</h2>
                        <p className="my-2">Build UI according to the available design.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>PSD to HTML/CSS</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, Tailwind, Typescript, ReactJs, Create React App.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://samwylecoffe.netlify.app/
                        </p>
                        <p>
                            <span className="font-bold">GitHub: </span>
                            https://github.com/ZzuyThanhzZ/TheCoffeShop
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://todojob.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={GuessNum} alt="Guess number game" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Guess number game</h2>
                        <p className="my-2">Build a mini web game. Users must guess the secret number to win the game.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://guessgame123.netlify.app/
                        </p>
                    </div>
                </div>

                <div className="xl:flex items-center mt-8">
                    <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                        <a href="https://letrolldice.netlify.app/" target="_blank">
                            <img className="rounded-xl" src={RollingDice} alt="Rolling dice game" />
                        </a>
                    </div>
                    <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                        <h2 className="text-3xl text-[#343A40] font-bold font-primary">Rolling dice game</h2>
                        <p className="my-2">Build a mini web game that allow users can relax with friends.</p>
                        <p>
                            <span className="font-bold">Role: </span>
                            <span>Frontend</span>
                        </p>
                        <p>
                            <span className="font-bold">Technologies: </span>
                            HTML, CSS, JavaScript.
                        </p>
                        <p>
                            <span className="font-bold">Website: </span>
                            https://letrolldice.netlify.app/
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;