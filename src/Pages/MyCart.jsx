import React, { useEffect, useState } from "react";

const MyCart = () => {
  const [productData, setProductData] = useState([]);

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

  const prods = cartData?.map(({ prod_id }) =>
  productData?.find((e) => e._id === prod_id)
);

  console.log("prods", prods);

  return (
    <div>
      { loading && loading1 ? (
        <p>Loading...</p>
      ) : (
        prods?.map((e) => (
          <div>
            <p>{e?.name}</p>
            <img src={e?.img} alt="" />
            <p>{e?.brand_name}</p>
            <p>{e?.type}</p>
            <p>{e?.rating}</p>
            <p>{e?.price}</p>
            <p>{e?.info}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCart;
