
import vikycImg from '../../../../images/vikyc.png';

const Vikyc = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <img className="rounded-xl" src={vikycImg} alt="Workout" />
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Landing Page</h2>
                <p className="my-2">Developing responsive website to promoting Ekyc service of company. This site uses NextJs to support SEO and many CSS animation to attract users.</p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    NextJs, Ant Design, Tailwind, Scss.
                </p>
            </div>
        </div>
    );
}
 
export default Vikyc;