import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const OurBrands = () => {
  const brandData = useLoaderData();
  // console.log(brandData);

  return (
    <div className="w-11/12 mx-auto">
      <h2>OurBrands</h2>
      <div className="grid grid-cols-3 gap-8">
        {brandData?.map((e) => (
          <Link to={`/brands/${e._id}`}>
            <div className="cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={e.img} alt="" />
              </div>
              <p>{e.brandName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
