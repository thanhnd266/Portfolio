
import vikycImg from '../../../../images/vikyc.png';

const Vikyc = () => {
    return (
        <div className="xl:flex items-center mt-8">
            <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
                <a href="https://workoutmap123.netlify.app/" target="_blank" rel="noreferrer">
                    <img className="rounded-xl" src={vikycImg} alt="Workout" />
                </a>
            </div>
            <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
                <h2 className="text-3xl text-[#343A40] font-bold font-primary">Vikyc Landing Page</h2>
                <p className="my-2">Vikyc Landing page is a website promoting Vikyc service of Vision Network Vietnam. This site uses NextJs to support SEO.</p>
                <p>
                    <span className="font-bold">Role: </span>
                    <span>Frontend</span>
                </p>
                <p>
                    <span className="font-bold">Technologies: </span>
                    NextJs, Ant Design, Tailwind.
                </p>
                <p>
                    <span className="font-bold">Website: </span>
                    <a className="hover:text-sky-600" href="https://vikyc.vn/" target="_blank" rel="noreferrer">https://vikyc.vn/</a>
                </p>
            </div>
        </div>
    );
}
 
export default Vikyc;