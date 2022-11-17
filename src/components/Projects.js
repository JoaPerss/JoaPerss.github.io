import React, { Component } from "react";
import highPriestess from "../images/highPriestess.jpg";
import chariot from "../images/chariot.jpg";
import hermit from "../images/hermit.jpg";
import ReactCardFlipper from "react-card-flipper";
import ReactDOM from "react-dom";

class Projects extends Component {
    render() {
        return (
            <div class="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 h-auto mt-5">
                <h1 class="text-7xl text-center font-aloevera m-10 ">Projects</h1>
                <div class="grid grid-cols-3 gap-4 ">

                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                                <img src={highPriestess} alt="Project 1" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                            </div>
                            <div>
                                <h1 class="text-7xl text-center font-aloevera m-10 ">Project 1</h1>
                                <p class="text-2xl text-center font-aloevera m-10 ">This is a project about something</p>
                            </div>
                        </ReactCardFlipper>
                    </div>

                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                                <img src={chariot} alt="Project 2" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                            </div>
                            <div>
                                <h1 class="text-7xl text-center font-aloevera m-10 ">Project 2</h1>
                                <p class="text-2xl text-center font-aloevera m-10 ">This is a project about something</p>
                            </div>
                        </ReactCardFlipper>
                    </div>
                    
                    <div class="col-span-3 sm:col-span-1">
                        <ReactCardFlipper behavior="hover">
                            <div>
                        <img src={hermit} alt="Project 3" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false" />
                    </div>
                    <div>
                        <h1 class="text-7xl text-center font-aloevera m-10 ">Project 3</h1>
                        <p class="text-2xl text-center font-aloevera m-10 ">This is a project about something</p>
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