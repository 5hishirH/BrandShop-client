import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../AuthProvider";

const MyCart = () => {
  const [productData, setProductData] = useState([]);
  const { user } = useAuthContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://brand-shop-server-hazel-nine.vercel.app/products")
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

  const [cartData, setCartData] = useState([]);

  const [loading1, setLoading1] = useState(true);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("https://brand-shop-server-hazel-nine.vercel.app/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCartData(data);
        setLoading1(false);
      })
      .catch((error) => {
        setError1(error);
        setLoading1(false);
      });
  }, []);

  const userCart = cartData?.filter((e) => e.userEmail === user.email);

  const prods0 = userCart?.map(({ prod_id }) =>
    productData?.find((e) => e._id === prod_id)
  );

  console.log("prods0", prods0);

  const prods = prods0?.filter((e) => e !== undefined);
  console.log(prods);

  return (
    <div className="mt-24 mx-auto w-11/12">
      {!prods ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2 className="text-4xl font-semibold mb-8">My cart</h2>
          <div className="">
            <div className="grid grid-cols-2 gap-8">
              {prods?.map((e) => (
                <div className="h-72 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-between p-6 rounded-xl">
                  <div className="h-full w-[40%] overflow-hidden rounded-xl">
                    <img
                      src={e?.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-1/2">
                    <div>
                      <h2>{e?.name}</h2>
                      <p>Brand : {e?.brand_name}</p>
                      <p>Product Type : {e?.type}</p>
                      <p>Price : {e?.price}$</p>
                      <p>Rating : {e?.rating}/5</p>
                      <p>{e?.info.slice(0, 90)}.....</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
