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
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col bg-cover justify-center items-center px-[100px] ">
          <img
            className=""
            src="/public/images/circle.png"
            alt=""
          />
          <img className=" absolute top-0" src="/images/logo.png" alt="" />

          <div className="flex justify-center items-center  mt-10 pt-6 ">
            <input
              id="locationId"
              placeholder="Enter location 1 to 125" 
              className=" border-2 border-[#8EFF8B] text-center text-white bg-transparent w-[400px]"
              type="text"
            />
            <button className=" flex  px-4 h-[27px] border-[#8EFF8B] bg-[#8EFF8B] ">
              Search <i class="bx bx-search"></i>
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
