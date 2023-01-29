
import DatxInsightImg from '../../../../images/insight.png';

const DatxInsight = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <a href="https://workoutmap123.netlify.app/" target="_blank" rel="noreferrer">
                    <img className="rounded-xl" src={DatxInsightImg} alt="Workout" />
                </a>
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Datx Insight</h2>
                <p className="my-2">
                    Datx Insight is a website used to manage tasks on other datx software. Only admin accounts can access insight and edit user information, roles and product packages.
                </p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    AngularJs, NodeJs, ExpressJs.
                </p>
                <p>
                    <span className="font-bold">Website: </span>
                    <a className="hover:text-sky-600" href="https://insight.datxasia.com/" target="_blank" rel="noreferrer">https://insight.datxasia.com/</a>
                </p>
            </div>
        </div>
    );
}
 
export default DatxInsight;