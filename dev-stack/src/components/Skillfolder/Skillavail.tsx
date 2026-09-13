import React from "react";
import type { skillType } from "../../Types/SkillsType";





const Skillavail = ({ skillhook }) => {
  console.log(skillhook, "now avail");
  return (
    <div className="grid grid-cols-3 gap-5 mt-8">
      {skillhook.map((SkillsType :skillType) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
              className="w-14- h-14"
                src={SkillsType.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
                
              <h2 className="card-title">{SkillsType.skill}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>

                 <hr className='border-[#dae0e7] w-85 -ml-2 mt-3'/>


              <div className="grid grid-cols-3 ">
                <button className="-ml-14">{SkillsType.inuse}</button>
                <button>{SkillsType.userof}</button>

                <div className="flex ml-16 items-center">
                    <img className="m-2 w-4 h-4" src="./Star.png" alt="" />
                    <button className="font-semibold">{SkillsType.rating}</button>

                </div>
            

              </div>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skillavail;
