import React from "react";

const Location = ({ location }) => {
  return (
    <section className="flex flex-col text-center p-3  text-white mx-auto border max-w-[600px] border-green-300 rounded-2xl shadow-2xl shadow-green-800">
      <h2 className=" shadow-sm max-w-full rounded-lg mx-16 shadow-green-800">{location?.name}</h2>
      <ul className="flex flex-row justify-around">
        <li className="font-bold">Type: {location?.type}</li>
        <li className="font-bold">Dimensin: {location?.dimension}</li>
        <li className="font-bold">Population: {location?.residents.length}</li>
      </ul>
    </section>
  );
};

export default Location;
