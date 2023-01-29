import PhotoGalleryImg from '../../../../images/photogallery.jpg'

const PhotoGallery = () => {
    return (
        <div className="xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80 border-2 rounded-xl">
            <a href="https://photogalleryndt.netlify.app/" target="_blank" rel="noreferrer">
                <img className="rounded-xl" src={PhotoGalleryImg} alt="PhotoGallery" />
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
                HTML, CSS, JavaScript, ReactJs, React hooks.
            </p>
            <p>
                <span className="font-bold">Website: </span>
                <a className="hover:text-sky-600" href="https://photogalleryndt.netlify.app/" target="_blank" rel="noreferrer">https://photogalleryndt.netlify.app/</a>
            </p>
            <p>
                <span className="font-bold">GitHub: </span>
                <a className="hover:text-sky-600" href="https://github.com/ZzuyThanhzZ/PhotoGallery" target="_blank" rel="noreferrer">https://github.com/ZzuyThanhzZ/PhotoGallery</a>
            </p>
        </div>
    </div>
    );
}
 
export default PhotoGallery;