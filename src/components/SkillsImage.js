//make a react component to display the skills as images that are links passed as props
const SkillsImage = ({ skillsImage }) => {
    return (
        <div className="container mx-auto bg-peach w-4/5 p-5 rounded-lg opacity-98 h-max mt-5">
            <h1 className="text-7xl text-center font-aloevera m-10">My Skills and technologies</h1>
            <div className="place-content-center">
            {ListMaker(skillsImage)}
            </div>
        </div>
    );
};

export default SkillsImage;
function ListMaker(skillsImage) {
    return <ul className="flex flex-wrap gap-4 justify-between">
        {skillsImage.map(skillImage => (
            <li key={skillImage} className="text-2xl text-center font-aloevera m-10 max-w-4/5">
                <img className="h-32" src={skillImage} alt="Pictures of skills" draggable="false" />
            </li>
        ))}
    </ul>;
}

