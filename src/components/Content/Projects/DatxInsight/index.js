
import DatxInsightImg from '../../../../images/insight.png';

const DatxInsight = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <img className="rounded-xl" src={DatxInsightImg} alt="Workout" />
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Manager Application</h2>
                <p className="my-2">
                    Developing responsive web application. This website used to manage tasks on other products. Only admin accounts can access and edit user information, roles and product packages.
                </p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    AngularJs, NodeJs, ExpressJs.
                </p>
            </div>
        </div>
    );
}
 
export default DatxInsight;