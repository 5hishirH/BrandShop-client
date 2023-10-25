import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const OurBrands = () => {
  // const brandData = useLoaderData();
  // console.log(brandData);
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://brand-shop-server-hazel-nine.vercel.app/brands"
      ); // Replace with your API URL
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setBrandData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  //...
  const keepFetchingData = async () => {
    const fetchedData = await fetchData();

    if (fetchedData !== null) {
      // Check if the fetched data meets a specific condition
      if (brandData?.brandName) {
        setData(fetchedData);
        setIsFetching(false);
      } else {
        // If the condition is not met, continue fetching data recursively
        await keepFetchingData();
      }
    } else {
      // Handle the case where fetching fails
      setIsFetching(false);
    }
  };

  useEffect(() => {
    keepFetchingData();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div className="mt-28">
          <h2 className="text-4xl text-center font-semibold">Our Brands</h2>
          <div className="mt-10 grid grid-cols-3 gap-8">
            {brandData?.map((e) => (
              <Link to={`/brands/${e._id}`} className="">
                <div className="cursor-pointer">
                  <div className="h-64 overflow-hidden rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <img src={e.img} alt="" className="w-full h-full object-cover"/>
                  </div>
                  <p className="text-center text-xl font-medium mt-4">{e.brandName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBrands;
