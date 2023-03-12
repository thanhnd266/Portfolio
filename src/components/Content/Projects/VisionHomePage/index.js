
import visionHomePageImg from '../../../../images/vision-homepage.png';

const VisionHomePage = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <img className="rounded-xl" src={visionHomePageImg} alt="Workout" />
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Promotion Website</h2>
                <p className="my-2">Developing 3 responsive websites to promoting company's services. In addition, these websites also support content creators to write and publish news.</p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    NextJs, Boostrap, Scss, GhostJS.
                </p>
            </div>
        </div>
    );
}
 
export default VisionHomePage;