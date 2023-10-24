import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const OurBrands = () => {
  // const brandData = useLoaderData();
  // console.log(brandData);
  const [brandData, setBrandData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://brand-shop-server-cy04mmzkd-5hishirh.vercel.app/brands"
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

    fetchData(); // Call the fetchData function when the component mounts
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
