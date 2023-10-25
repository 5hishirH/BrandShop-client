import React from "react";
import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../AuthProvider";
import Swal from "sweetalert2";

const ProdDetails = () => {
  const { _id, name, brand_name, type, info, rating, img, price } =
    useLoaderData();
  const { user } = useAuthContext();
  const userEmail = user.email;

  //...
  const handleAddToCart = () => {
    const doc = { prod_id : _id, userEmail };

    fetch("https://brand-shop-server-hazel-nine.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <p>{name}</p>
      <img src={img} alt="" />
      <p>{brand_name}</p>
      <p>{type}</p>
      <p>{rating}</p>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={handleAddToCart} className="btn btn-neutral">Add to Cart</button>
    </div>
  );
};

export default ProdDetails;
