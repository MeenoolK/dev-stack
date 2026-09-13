


import {use} from "react";
import type { skillType } from "../../Types/SkillsType";
import Skillavail from "./Skillavail";



interface skillProps{
    skillPromise : Promise<skillType[]>
}


const Skills = ({skillPromise}:skillProps) => {
    const skillhook = use(skillPromise);
    console.log(skillhook);
    return (
        <div className="container mx-auto">

            <div>
                <h1>Explore the Technologies  </h1>
                <h2>Pick one technology per category to build your ideal stack.</h2>
            </div>


            <Skillavail skillhook={skillhook}/>
            
        </div>
    );
};

export default Skills;