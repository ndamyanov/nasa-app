import React, { useEffect, useState } from "react";
import { getAsteroids } from "../services/Http";
import Paginator from "../components/Paginator";

const Asteroids = () => {
  const [asteroidsData, setAsteroidsData] = useState({});
  const [paginationData, setPaginationData] = useState({
    prevPage: null,
    currentPage: 0,
    nextPage: 1,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getAsteroids(paginationData.currentPage);
      setAsteroidsData(data);
    };
    getData();
  }, [paginationData.currentPage]);

  const onHandlePrevPage = () => {
    setPaginationData((prevVal, data) => ({
      ...paginationData,
      prevPage: prevVal.prevPage - 1 > 0 ? prevVal.prevPage - 1 : 0,
      currentPage: prevVal.prevPage,
      nextPage: prevVal.currentPage,
    }));
  };

  const onHandleNextPage = () => {
    setPaginationData((prevVal, data) => ({
      ...paginationData,
      prevPage: prevVal.currentPage,
      currentPage: prevVal.nextPage,
      nextPage: prevVal.nextPage + 1,
    }));
  };

  return (
    <div>
      <table className="m-auto">
        <thead>
          <tr>
            <th className="p-1 text-left">Name</th>
            <th className="p-1">DESIGNATION</th>
            <th className="p-1">MIN DIAMETER (km)</th>
            <th className="p-1">MAX DIAMETER (km)</th>
          </tr>
        </thead>
        <tbody>
          {asteroidsData.near_earth_objects &&
            asteroidsData.near_earth_objects.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="p-1">{item.name}</td>
                  <td className="p-1">{item.designation}</td>
                  <td className="p-1">
                    {item.estimated_diameter.kilometers.estimated_diameter_min}
                  </td>
                  <td className="p-1">
                    {item.estimated_diameter.kilometers.estimated_diameter_max}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Paginator
        paginationData={paginationData}
        onHandlePrevPage={onHandlePrevPage}
        onHandleNextPage={onHandleNextPage}
      />
    </div>
  );
};

export default Asteroids;
