
import visionHomePageImg from '../../../../images/vision-homepage.png';

const VisionHomePage = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <a href="https://workoutmap123.netlify.app/" target="_blank" rel="noreferrer">
                    <img className="rounded-xl" src={visionHomePageImg} alt="Workout" />
                </a>
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Vision Network Home</h2>
                <p className="my-2">The homepage of the company Visionnetwork Vietnam. This site uses Ghost to support writting and posting news.</p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    NextJs, Boostrap, Ghost.
                </p>
                <p>
                    <span className="font-bold">Website: </span>
                    <a className="hover:text-sky-600" href="https://visionnetwork.vn/" target="_blank" rel="noreferrer">https://visionnetwork.vn/</a>
                </p>
            </div>
        </div>
    );
}
 
export default VisionHomePage;