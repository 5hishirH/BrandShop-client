import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brandData = useLoaderData();
  let itemId = 0;

  const [productData, setProductData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const brandProds = productData?.filter((e) => {
    if (brandData.brandName.toLowerCase() === e.brand_name.toLowerCase()) {
      return e;
    }
  });

  console.log(brandProds);

  return (
    <div className="w-11/12 mx-auto">
      {/* carousel */}
      <div className="carousel w-full">
        {brandData?.ads.map((e) => (
          <div id={`item${itemId++}`} className="carousel-item w-full h-96">
            <img src={e} className="w-full h-full object-cover" />
          </div>
        ))}
        {(itemId = 0)}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {brandData?.ads.map((e) => (
          <a href={`#item${itemId++}`} className="btn btn-xs">
            {itemId}
          </a>
        ))}
      </div>

      {/* products */}
      <div className="grid grid-cols-2 gap-8">
        {brandProds[0]?.brand_name ? (
          brandProds?.map(
            ({ name, brand_name, type, info, rating, img, price }) => (
              <div>
                <div>
                  <img src={img} alt="" />
                </div>
                <div>
                  <div>
                    <h2>{name}</h2>
                    <p>Brand : {brand_name}</p>
                    <p>Product Type : {type}</p>
                    <p>Price : {price}$</p>
                    <p>Rating : {rating}/5</p>
                    <p>{info}</p>
                  </div>
                  <div>
                    <button className="btn btn-neutral">Details</button>
                    <button className="btn btn-neutral">Update</button>
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default BrandDetails;
