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
        <div>
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
      )}
    </div>
  );
};

export default OurBrands;
