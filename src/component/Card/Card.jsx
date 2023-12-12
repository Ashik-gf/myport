import React from "react";
import { useLoaderData } from "react-router";

const Card = ({data}) => {

  return (
    <div>
      <div className="card w-[250px] bg-base-100 shadow-xl hover:shadow-slate-700 hover:transition-shadow hover:duration-500">
        <figure>
          <img
          className="h-[120px] w-[150px] mt-4"
            src={data.Image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.Title}</h2>
          <p className="text-purple-500 font-semibold">
             <span className=" text-black font-bold text-lg">Experience:</span> {data.Experience}</p>
          <p className="text-purple-500 font-semibold"> 
          <span className=" text-black font-bold text-lg">TotalProject:</span>  {data.TotalProject}</p>
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
