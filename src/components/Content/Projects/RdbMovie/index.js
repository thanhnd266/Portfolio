import Rdbmovie from '../../../../images/rdbmovie.jpg';

const RdbMovie = () => {
    return (
        <div className="w-full xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
            <a href="https://rdbmovie.netlify.app/" target="_blank" rel="noreferrer">
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
                ReactJS, React hooks, Styled-components, React Router, Swiper.
            </p>
            <p>
                <span className="font-bold">Website: </span>
                <a className="hover:text-sky-600" href="https://rdbmovie.netlify.app/" target="_blank" rel="noreferrer">https://rdbmovie.netlify.app/</a>
            </p>
            <p>
                <span className="font-bold">GitHub: </span>
                <a className="hover:text-sky-600" href="https://github.com/ZzuyThanhzZ/WatchMovie" target="_blank" rel="noreferrer">https://github.com/ZzuyThanhzZ/WatchMovie</a>
            </p>
        </div>
    </div>
    );
}
 
export default RdbMovie;