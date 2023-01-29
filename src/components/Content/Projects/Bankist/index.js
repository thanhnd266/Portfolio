import BankistImg from '../../../../images/bankist.jpg';

const Bankist = () => {
    return (
        <div className="xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
            <a href="https://ndtbankist.netlify.app/" target="_blank" rel="noreferrer">
                <img className="rounded-xl" src={BankistImg} alt="Bankist" />
            </a>
        </div>
        <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
            <h2 className="text-3xl text-[#343A40] font-bold font-primary">Bankist Application</h2>
            <p className="my-2">Build a demo website about banking. Users can login with demo account and manage their finances.</p>
            <p>
                <span className="font-bold">Role: </span>
                <span>Frontend</span>
            </p>
            <p>
                <span className="font-bold">Technologies: </span>
                HTML, CSS, JavaScript.
            </p>
            <p>
                <span className="font-bold">Accounts: </span>
                js-1111, ndt-2222, mm-3333, ew-4444.
            </p>
            <p>
                <span className="font-bold">Website: </span>
                <a className="hover:text-sky-600" href="https://ndtbankist.netlify.app/" target="_blank" rel="noreferrer">https://ndtbankist.netlify.app/</a>
            </p>
            <p>
                <span className="font-bold">GitHub: </span>
                <a className="hover:text-sky-600" href="https://github.com/ZzuyThanhzZ/bankist" target="_blank" rel="noreferrer">https://github.com/ZzuyThanhzZ/bankist</a>
            </p>
        </div>
    </div>
    );
}
 
export default Bankist;