import React from "react";

const Location = ({ location }) => {
  return (
    <section className="text-white ">
      <h2 className="flex justify-center">{location?.name}</h2>
      <ul className="flex flex-col items-center">
        <li className="">Type: {location?.type}</li>
        <li className="">Dimensin: {location?.dimension}</li>
        <li className="">Population: {location?.residents.length}</li>
      </ul>
    </section>
  );
};

export default Location;
