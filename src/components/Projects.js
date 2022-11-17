import React, { Component } from "react";
import highPriestess from "../images/highPriestess.jpg";
import chariot from "../images/chariot.jpg";
import hermit from "../images/hermit.jpg";
import back from "../images/back.jpg";
import ReactCardFlipper from "react-card-flipper";
import ReactDOM from "react-dom";

class Projects extends Component {
    render() {
        return (
            <div class="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 h-[900px] mt-5">
                <h1 class="text-7xl text-center font-aloevera m-10 h-max">Projects</h1>
                <p class="text-2xl text-center font-aloevera m-10">More projects coming soon!</p>

                <div class="grid grid-cols-3 gap-4 h-max">

                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                                <img src={highPriestess} alt="High Priestess Tarot Card" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                            </div>
                            <div class="relative">
                                <img src={back} alt="Zunes" class="shadow-lg rounded-lg max-w-full h-auto w-full align-middle border-none blur-xs" draggable="false" />
                                <h1 class="absolute text-7xl text-center font-aloevera m-10 top-0 left-0 right-0">Zunes</h1>
                                <p class="text-2xl text-center font-aloevera m-10 absolute top-20">A social music platform w/ Spotify integration. Made for Android in Java. Contains Firebase Authentication </p>
                                <a href="https://github.com/JoaPerss/ZunesApp" target="_blank" rel="noreferrer" class="text-2xl text-center font-bold font-aloevera m-10 absolute top-64 left-0 right-0">Github</a>
                            </div>
                        </ReactCardFlipper>
                    </div>

                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                                <img src={chariot} alt="Chariot Tarot Card" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                            </div>
                            <div class="relative">
                                <img src={back} alt="AUDtoNOK" class="shadow-lg rounded-lg max-w-full h-auto w-full align-middle border-none blur-xs" draggable="false" />
                                <h1 class="absolute text-7xl text-center font-aloevera m-10 top-0 left-0 right-0">AUD to NOK</h1>
                                <p class="text-2xl text-center font-aloevera m-10 absolute top-40">This is a Vercel / Next.js app that is a simple conversion between AUD and NOK. It uses a conversion API which is updated hourly with rates.</p>
                                <a href="https://aud-to-nok.vercel.app/" target="_blank" rel="noreferrer" class="text-2xl text-center font-bold font-aloevera m-10 absolute top-96 left-0 right-0">Vercel App</a>
                            </div>
                        </ReactCardFlipper>
                    </div>

                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                                <img src={hermit} alt="Hermit Tarot Card" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                            </div>
                            <div class="relative">
                                <img src={back} alt="NetsGo" class="shadow-lg rounded-lg max-w-full h-auto w-full align-middle border-none blur-xs" draggable="false" />
                                <h1 class="absolute text-7xl text-center font-aloevera m-10 top-0 left-0 right-0">NetsGo</h1>
                                <p class="text-2xl text-center font-aloevera m-10 absolute top-20">NetsGo is a company that designs, develops and hosts websites for small businesses. Our website is made with Vue.js and Docker is used for constant deployment amongst other technologies.</p>
                                <a href="https://netsgo.no/" target="_blank" rel="noreferrer" class="text-2xl text-center font-bold font-aloevera m-10 absolute top-96 left-0 right-0">NetsGo</a>
                            </div>
                        </ReactCardFlipper>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<Projects />, document.getElementById("root"));
export default Projects;