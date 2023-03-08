const SkillsImage = ({ skillsImage }) => {
    return (
        <div className="container mx-auto bg-peach w-full p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 className="text-4xl md:text-7xl text-center font-aloevera my-10">My Skills and Technologies</h1>
            <div className="flex justify-center md:justify-center sm:flex">
                {ListMaker(skillsImage)}
            </div>
        </div>
    );
};

export default SkillsImage;

function ListMaker(skillsImage) {
    return (
        <ul className="flex flex-wrap gap-4 justify-center">
            {skillsImage.map(skillImage => (
                <li key={skillImage} className="text-center font-aloevera md:w-auto">
                    <img className="h-32 md:h-48 object-fit: contain" src={skillImage} alt="Pictures of skills" draggable="false" />
                </li>
            ))}
        </ul>
    );
}
