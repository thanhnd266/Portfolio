import TodosImg from '../../../../images/todos.jpg';

const Todos = () => {
    return (
        <div className="xl:flex items-center mt-8">
        <div className="w-full xl:w-2/3 mr-8 hover:opacity-80">
            <a href="https://todojob.netlify.app/" target="_blank" rel="noreferrer">
                <img className="rounded-xl" src={TodosImg} alt="Todos" />
            </a>
        </div>
        <div className="w-full mt-4 mb-12 xl:my-0 xl:w-2/3"> 
            <h2 className="text-3xl text-[#343A40] font-bold font-primary">Todos application</h2>
            <p className="my-2">Build a web application to manage user's to-do list.</p>
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
                <a className="hover:text-sky-600" href="https://todojob.netlify.app/" target="_blank" rel="noreferrer">https://todojob.netlify.app/</a>
            </p>
            <p>
                <span className="font-bold">GitHub: </span>
                <a className="hover:text-sky-600" href="https://github.com/ZzuyThanhzZ/todos" target="_blank" rel="noreferrer">https://github.com/ZzuyThanhzZ/todos</a>
            </p>
        </div>
    </div>
    );
}
 
export default Todos;