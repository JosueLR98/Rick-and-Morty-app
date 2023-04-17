import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { list } from "postcss";
//contiene todas las cards
const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const residents_Per_Page = 20;
  const arrayPages = [];
  const quantityPage = Math.ceil(
    location?.residents.length / residents_Per_Page
  );
  for (let i = 1; i <= quantityPage; i++) {
    arrayPages.push(i);
  }
  const startCut = currentPage * residents_Per_Page - residents_Per_Page;
  const endCut = currentPage * residents_Per_Page;
  const residents = location?.residents;
  useEffect(() => {
    setCurrentPage(1);
  }, [location]);
  return (
    <>
      <section
        className="
      grid grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]  max-w-[1000px] mx-auto auto-rows-auto  gap-6 px-4 py-4"
      >
        {residents?.slice(startCut, endCut).map((resident) => (
          <ResidentCard key={resident} resident={resident} />
        ))}
      </section>
      <ul className=" flex gap-4 justify-center py-4 cursor-pointer  text-white">
        {arrayPages.map((page) => (
          <li
            onClick={() => setCurrentPage(page)}
            className={` p-3 ${
              page === currentPage &&
              "bg-[#062226] text-white font-bold rounded-md px-5"
            } `}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResidentList;
