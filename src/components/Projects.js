import React, { useState } from "react";
import highPriestess from "../images/highPriestess.jpg";
import chariot from "../images/chariot.jpg";
import hermit from "../images/hermit.jpg";
import back from "../images/back.jpg";

const ProjectCard = ({ frontImage, altText, title, description, link, linkText }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="col-span-3 sm:col-span-1 perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div 
                className={`relative transition-transform duration-1000 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                }`}
                style={{ pointerEvents: 'none' }}
            >
                {/* Front of card */}
                <div className="backface-hidden rounded-xl overflow-hidden">
                    <img 
                        src={frontImage} 
                        alt={altText} 
                        className="w-full h-auto shadow-lg rounded-xl" 
                        draggable="false" 
                    />
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img 
                            src={back} 
                            alt={`${title} background`} 
                            className="w-full h-full object-cover blur-sm" 
                            draggable="false" 
                        />
                        <div className="absolute inset-0 bg-peach bg-opacity-80 flex flex-col justify-center items-center p-3 md:p-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-aloevera mb-2 md:mb-3 text-dark-blue">
                                {title}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-aloevera mb-2 md:mb-4 text-dark-blue px-1 md:px-2">
                                {description}
                            </p>
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-xs sm:text-sm md:text-base text-center font-bold font-aloevera text-dark-blue hover:underline"
                                style={{ pointerEvents: 'auto' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {linkText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projectsData = [
        {
            frontImage: highPriestess,
            altText: "High Priestess Tarot Card",
            title: "Zunes",
            description: "A social music platform w/ Spotify integration. Made for Android in Java. Contains Firebase Authentication.",
            link: "https://github.com/JoaPerss/ZunesApp",
            linkText: "GitHub"
        },
        {
            frontImage: chariot,
            altText: "Chariot Tarot Card",
            title: "AUD to NOK",
            description: "This is a Vercel / Next.js app that is a simple conversion between AUD and NOK. It uses a conversion API which is updated hourly with rates.",
            link: "https://aud-to-nok.vercel.app/",
            linkText: "Vercel App"
        },
        {
            frontImage: hermit,
            altText: "Hermit Tarot Card",
            title: "NetsGo",
            description: "NetsGo is a company that designs, develops and hosts websites for small businesses. Our website is made with Vue.js and Docker is used for constant deployment amongst other technologies.",
            link: "https://netsgo.no/",
            linkText: "NetsGo"
        }
    ];

    return (
        <div className="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 min-h-[800px] mt-5">
            <h1 className="lg:text-7xl text-center font-aloevera m-10 text-4xl text-dark-blue">
                Projects
            </h1>
            <p className="text-2xl text-center font-aloevera m-10 text-dark-blue">
                More projects coming soon!
            </p>

            <div className="grid grid-cols-3 gap-6 h-max">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
