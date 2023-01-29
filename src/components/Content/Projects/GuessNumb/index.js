import GuessNumImg from '../../../../images/guessnum.jpg';

const GuessNum = () => {
    return (
        <div className="xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
            <a href="https://todojob.netlify.app/" target="_blank" rel="noreferrer">
                <img className="rounded-xl" src={GuessNumImg} alt="Guess number game" />
            </a>
        </div>
        <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
            <h2 className="text-3xl text-[#343A40] font-bold font-primary">Guess number game</h2>
            <p className="my-2">Build a mini web game. Users must guess the secret number to win the game.</p>
            <p>
                <span className="font-bold">Role: </span>
                <span>Frontend</span>
            </p>
            <p>
                <span className="font-bold">Technologies: </span>
                HTML, CSS, JavaScript.
            </p>
            <p>
                <span className="font-bold">Website: </span>
                <a className="hover:text-sky-600" href="https://guessgame123.netlify.app/" target="_blank" rel="noreferrer">https://guessgame123.netlify.app/</a>
            </p>
        </div>
    </div>
    );
}
 
export default GuessNum;