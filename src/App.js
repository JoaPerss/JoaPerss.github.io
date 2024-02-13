import Main from './components/Main';
import Info from './components/Info';
import Projects from './components/Projects';
import SkillsCarousel from './components/Carousel';
import React from "react";

// Birthdate
const birthdate = new Date('2000-07-01');

// Calculate age dynamically
const calculateAge = (birthdate) => {
    const today = new Date();
    const birthdateThisYear = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    let age = today.getFullYear() - birthdate.getFullYear();

    if (today < birthdateThisYear) {
        age--;
    }

    return age;
};

const myAge = calculateAge(birthdate);

const aboutMe = "My name is Joachim and I am a " +myAge+ " year old fullstack developer from Norway. I have a bachelors degree in Information Systems from Østfold University College. My degree was focused on Software Engineering and Business Intelligence. I have broad experience in development in teams and solo on projects. This includes modern web apps, data science case studies, mobile apps and business analysis. I am currently working as an engineer in the field of cyber security. Always expanding my knowledge and learning to use new technologies.";
const skillsImage = ["https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png",
    "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    "https://www.citypng.com/public/uploads/small/11662223208mrscxxesmsb91zq9ubngbriqcijzc1j6q5u12serbmv9pimrziktl695capupvzdmhwhn7tozqooqkhcuxw9cejvc0fia2foatgb.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1200px-Expressjs.png",
    "https://www.pngmart.com/files/13/Android-Logo-PNG-Transparent-Image.png",
    "https://www.logo.wine/a/logo/Python_(programming_language)/Python_(programming_language)-Logo.wine.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png ",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1024px-Cassandra_logo.svg.png",
    "https://stormagic.com/wp-content/uploads/2020/02/GCP-Logo.png",
    "https://cdn.document360.io/logo/84ec2311-0e05-4c58-90b9-baa9c041d22b/a8f5c28d58ea4df0b59badd4cebcc541-Logo_Blue.png",
    "https://companieslogo.com/img/orig/RPD_BIG-716e94b4.png?t=1599052679",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1024px-Microsoft_Azure_Logo.svg.png"
    
]

const App = () => {
    return (
        <div>
            <Main />
            <Info info={aboutMe} />
            <SkillsCarousel skillsImage={skillsImage}/>
            <Projects />
        </div>
    );
};

export default App;
