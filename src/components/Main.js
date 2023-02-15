import avatar from '../images/avatarSqr.png';

const Main = () => {
    return (
        <div className="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 className="lg:text-7xl text-center font-aloevera m-10 text-4xl">Welcome to my portfolio</h1>
            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-4/12 px-4">
                    <img src={avatar} alt="Avatar of JoaPerss" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" draggable="false"/>
                </div>
            </div>
            <p className="text-2xl text-center font-aloevera m-10">This is a collection of some of my projects and skills</p>
        </div>
    );
};

export default Main;
