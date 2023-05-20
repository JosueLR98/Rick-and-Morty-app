import { useEffect, useState } from "react";
import "./App.css";
import { getRamdonDimension } from "./helpers/Random";
import axios from "axios";
import ResidentList from "./components/ResidentList";
import Location from "./components/Location";

function App() {
  const [location, setLocation] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value;
    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRamdonDimension()}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" aspect-square bg-[url('/images/Fd.png')]  bg-contain ">
      <img className="px-6" src="/public/images/circle.png" alt="" />
      <img
        className=" absolute text-center top-0 px-3"
        src="/images/logo.png"
        alt=""
      />
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex justify-center max-w-[500px] pt-6 mx-auto ">
            <input
              id="locationId"
              placeholder="Enter location 1 to 125"
              className=" border-2 border-[#8EFF8B] text-center text-white bg-transparent w-[400px] p-1 text-3xl "
              type="text"
            />
            <button className=" flex items-center px-4  h-7 p-6 border-[#8EFF8B] bg-[#8EFF8B]  ">
              Search <i className="bx bx-search p-1"></i>
            </button>
          </div>
        </div>
        <h2 className="flex justify-center p-3 text-[#8EFF8B] font-bold">
          ¡Welcometo the crazy universe!
        </h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
    </div>
  );
}

export default App;
