import React, { Component } from "react";
import highPriestess from "../images/highPriestess.jpg";
import chariot from "../images/chariot.jpg";
import hermit from "../images/hermit.jpg";

class Projects extends Component {
  render() {
    return (
        <div class="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 class="text-7xl text-center font-aloevera m-10 ">Projects</h1>
        
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-3 sm:col-span-1">
                    <img src={highPriestess} alt="Project 1" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false"/>
                </div>
                <div class="col-span-3 sm:col-span-1">
                    <img src={chariot} alt="Project 2" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false"/>
                </div>
                <div class="col-span-3 sm:col-span-1">
                    <img src={hermit} alt="Project 3" class="shadow-lg rounded-lg max-w-full h-auto align-middle border-none" draggable="false"/>
                </div>
            </div>
    </div>
    );
  }
}

export default Projects;