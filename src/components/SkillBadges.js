import checkmark from '../images/checkmark.png';

const SkillBadges = () => {
    const badges = [
        {
            name: 'Cloud Engineer Skills Boost',
            imageUrl: 'https://example.com/badge1.png',
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d',
        },
        {
            name: 'Cloud Architect Skills Boost',
            imageUrl: 'https://example.com/badge2.png',
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d',
        },
        // Add more badges as needed
    ];

    return (
        <div className="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 className="lg:text-7xl text-center font-aloevera m-10 text-4xl">Skill Badges</h1>

            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                {badges.map((badge, index) => (
                    <div key={index} className="w-36 text-center flex flex-col items-center">
                        <div className="flex justify-center items-center bg-white shadow-lg rounded-lg w-32 h-32 mb-4">
                            <img 
                                src={badge.imageUrl} 
                                alt={`${badge.name} Badge`} 
                                className="max-w-full max-h-full" 
                                draggable="false"
                            />
                        </div>
                        <h2 className="text-sm font-aloevera font-bold">{badge.name}</h2>
                        <div className="flex items-center justify-center mt-2">
                            <a 
                                href={badge.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 font-aloevera underline">View Badge</a>
                            <img src={checkmark} alt="Checkmark" className="w-4 h-4 ml-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillBadges;
