
// import Coffee from '../../../images/coffee.jpg';

//components
import RdbMovie from './RdbMovie';
import PhotoGallery from './PhotoGallery';
import Forkify from './Forkify';
import Bankist from './Bankist';
import MusicPlayer from './MusicPlayer';
import Todos from './Todos';
import Workout from './Workout';
import GuessNum from './GuessNumb';
import RollingDice from './RollingDice';
import Vikyc from './Vikyc';
import VisionHomePage from './VisionHomePage';
import DatxInsight from './DatxInsight';

const Projects = ({elementRef}) => {

    return (
        <div ref={elementRef} className="p-12 flex items-center border-b-[1px]">
            <div className="w-full">
                <h1 className="text-6xl text-[#343A40] font-bold font-primary mb-8">PROJECTS</h1>
                <div className="font-primary text-[#343A40] text-2xl">
                    <h2>For about a year, I have been developing many websites. Here are some of my favorites.</h2>
                </div>

                <DatxInsight />

                <VisionHomePage />

                <Vikyc />

                <RdbMovie />

                <PhotoGallery />

                <Forkify />

                <Bankist />

                <MusicPlayer />

                <Todos />

                <Workout />

                {/* <div className="xl:flex items-center mt-8">
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
                </div> */}

                <GuessNum />

                <RollingDice />
            </div>
        </div>
    )
}

export default Projects;