import React, { Component } from "react";

class Info extends Component {
    render() {
        return (
            <div class="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5">
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2 sm:col-span-1">
                        <h1 class="lg:text-7xl text-center font-aloevera m-10 text-4xl ">About me</h1>
                        <p class="text-2xl text-center font-aloevera m-10 ">{this.props.info}</p>
                    </div>
                    <div class="col-span-2 sm:col-span-1">
                        <h1 class="lg:text-7xl text-center font-aloevera m-10 text-4xl ">Socials</h1>
                        <div class="flex flex-wrap justify-center">
                            <div class="w-6/12 sm:w-4/12 px-4">
                                <a href="https://www.linkedin.com/in/joachim-l%C3%B8venskjold-persson-2b0a1617a/" target="_blank" rel="noreferrer">
                                    <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG19.png" alt="LinkedIn" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" draggable="false" />
                                </a>                                    
                            </div>
                            <div class="w-6/12 sm:w-4/12 px-4">
                                <a href="https://github.com/JoaPerss" target="_blank" rel="noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" draggable="false"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default Info;