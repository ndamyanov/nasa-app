import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { getPictureData } from "../services/Http";

import "react-datepicker/dist/react-datepicker.css";

const Picture = () => {
  const [date, setDate] = useState(new Date());
  const [pictureData, setPictureData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getPictureData(date);
      setPictureData(data);
    };
    getData();
  }, [date]);

  return (
    <div className="text-center">
      <h1>Select date:</h1>
      <DatePicker selected={date} onChange={(d) => setDate(d)} />
      {pictureData && (
        <div>
          <div>Picture of the {date.toLocaleDateString()}</div>
          <img
            src={pictureData?.url}
            alt={pictureData?.title}
            className="m-auto w-1/3 h-auto"
          />
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <div className="p-2">
                  <span className="font-bold">Copyright: </span>
                  {pictureData?.copyright}
                </div>
              </div>
              <p>{pictureData?.explanation}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Picture;
