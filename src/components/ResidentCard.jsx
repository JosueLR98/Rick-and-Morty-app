import axios from "axios";
import React, { useEffect, useState } from "react";
const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknow: "bg-gray-500",
};
const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();
  
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className=" text-white border-[#8EFF8B] border-2 ">
      <div className="relative ">
        <img className="border-2 border-[#8EFF8B] w-full"  src={residentInfo?.image} alt="" />
        <div className="absolute bottom-4 flex gap-1 items-center justify-center w-[130px] left-1/2 -translate-x-1/2 border-[3px] border-[#8EFF8B] bg-[#020A02]/80 text-white p-1 px-2 ">
          <div
            className={`w-3 h-3 ${residentsStatus[residentInfo?.status] } rounded-full`}
          ></div>
          <span className="">{residentInfo?.status}</span>
        </div>
      </div>
      <section className=" flex flex-col  ">
        <h3 className="text-4xl border-[#8EFF8B]/[7%]  font-medium border-solid border-2 p-2 ">{residentInfo?.name}</h3>
        <ul className=" ">
          <li className="flex items-center gap-12 font-bold">
            <span className="p-3 text-[#938686]">Species:</span>
            <span >{residentInfo?.species}</span>
          </li>
          <li className="flex items-center gap-14 font-bold ">
            <span className="p-3  text-[#938686]">Origin:</span>
            <span>{residentInfo?.origin.name}</span>
          </li>
          <li className="flex  items-center gap-14 font-bold ">
            <span className=" p-3 text-[#938686]">Times appear:</span>
            <span>{residentInfo?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
