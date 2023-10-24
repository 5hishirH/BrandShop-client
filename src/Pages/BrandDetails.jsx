import React from "react";
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brandData = useLoaderData();
  let itemId = 0;

  return (
    <div className="w-11/12 mx-auto">
      {/* carousel */}
      <div className="carousel w-full">
        {brandData?.ads.map((e) => (
          <div
            id={`item${itemId++}`}
            className="carousel-item w-full h-96"
          >
            <img src={e} className="w-full h-full object-cover" />
          </div>
        ))}
        {
            itemId = 0
        }
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {
            brandData?.ads.map(e => <a href={`#item${itemId++}`} className="btn btn-xs">
            {itemId}
          </a>)
        }
      </div>
    </div>
  );
};

export default BrandDetails;
