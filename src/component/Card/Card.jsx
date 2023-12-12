

const Card = ({skill}) => {

  return (
    <div>
      <div className="card w-[250px] bg-base-100 shadow-xl hover:shadow-slate-700 hover:transition-shadow hover:duration-500">
        <figure>
          <img
          className="h-[120px] w-[150px] mt-4"
            src={skill?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{skill?.title}</h2>
          <p className="text-purple-500 font-semibold">
             <span className=" text-black font-bold text-lg">Experience:</span> {skill?.experience}</p>
          <p className="text-purple-500 font-semibold"> 
          <span className=" text-black font-bold text-lg">TotalProject:</span>  {skill?.totalProject}</p>
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
