import serverless from '../images/serverlesscloudrundev.png';
import camcr from '../images/camcr.png';
import terraform from '../images/terraform.png';
import setup from '../images/setup.png';
import foundationalgcp from '../images/foundationalgcp.png';

const SkillBadges = () => {
    const badges = [
        {
            name: 'Serverless Cloud Run Development',
            imageUrl: serverless,
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d/badges/8122981',
        },
        {
            name: 'Create and Manage Cloud Resources',
            imageUrl: camcr,
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d/badges/8098705',
        },
        {
            name: 'Automating Infrastructure with Terraform',
            imageUrl: terraform,
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d/badges/8092056',
        },
        {
            name: 'Cloud Environment Setup',
            imageUrl: setup,
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d/badges/8079191',
        },
        {
            name: 'App Dev Environment Setup',
            imageUrl: foundationalgcp,
            link: 'https://www.cloudskillsboost.google/public_profiles/a41a8a26-9711-46e3-8e99-e91614e5f97d/badges/8054925',
        },
    ];

    return (
        <div className="container mx-auto bg-peach w-full p-8 rounded-2xl shadow-lg mt-8">
            <h1 className="lg:text-6xl text-center font-bold mb-12 text-4xl text-dark-blue">
                Skill Badges
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {badges.map((badge, index) => (
                    <a 
                        key={index}
                        href={badge.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center"
                        aria-label={badge.name}
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 transition-all duration-300 group-hover:scale-110">
                            <div className="absolute inset-0 bg-white/90 opacity-70 rounded-2xl shadow-md transform group-hover:rotate-3 transition-transform duration-300"></div>
                            <img 
                                src={badge.imageUrl} 
                                alt={badge.name}
                                className="relative z-10 w-full h-full object-contain p-4"
                                draggable="false"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SkillBadges;