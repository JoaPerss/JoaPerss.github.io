import avatar from '../images/avatarSqr.png';


const Main = () => {
    return (
        <div class="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 class="text-7xl text-center font-aloevera m-10 ">Welcome to my portfolio</h1>
            <div class="flex flex-wrap justify-center">
                <div class="w-6/12 sm:w-4/12 px-4">
                    <img src={avatar} alt="Avatar of JoaPerss" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div>
            <p class="text-2xl text-center font-aloevera m-10 ">This is a collection of some of my projects and skills</p>
        </div>
    );
};

export default Main;