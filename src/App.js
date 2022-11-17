import Main from "./components/Main";
import Info from "./components/Info";
import React from "react";

const aboutMe = "I am a 22 year old fullstack developer from Norway. I have a bachelors degree in Information Systems from Østfold University College. My degree was focused on Software Engineering and Business Intelligence. I have broad expirence in development in teams and solo on projects. This includes modern web apps, data science case studies, mobile apps and business analysis.";

const App = () => {
    return (
        <div>
            <Main />
            <Info info={aboutMe} />
        </div>
    );
};

export default App;