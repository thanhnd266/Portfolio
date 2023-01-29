import ForkifyImg from '../../../../images/forkify.jpg';

const Forkify = () => {
    return (
        <div className="xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
            <a href="https://forkify-ndt26.netlify.app/" target="_blank" rel="noreferrer">
                <img className="rounded-xl" src={ForkifyImg} alt="Forkify" />
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
                <a className="hover:text-sky-600" href="https://forkify-ndt26.netlify.app/" target="_blank" rel="noreferrer">https://forkify-ndt26.netlify.app/</a>
            </p>
            <p>
                <span className="font-bold">GitHub: </span>
                <a className="hover:text-sky-600" href="https://github.com/ZzuyThanhzZ/forkify-ndt" target="_blank" rel="noreferrer">https://github.com/ZzuyThanhzZ/forkify-ndt</a>
            </p>
        </div>
    </div>
    );
}
 
export default Forkify;