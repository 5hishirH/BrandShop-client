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
    const doc = { prod_id: _id, userEmail };

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
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto mt-20">
      <div className="w-full flex justify-center gap-24 mx-auto">
        <div className="w-[30rem] h-[40rem] overflow-hidden rounded-xl">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-[40rem]">
          <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg">
            <p className="text-4xl font-bold">{name}</p>
            <p className="mt-4">{brand_name}</p>
            <p>{type}</p>
            <p>Rating : {rating}/5</p>
            <p className="font-bold">{price}$</p>
            <button onClick={handleAddToCart} className="mt-6 btn btn-neutral">
              Add to Cart
            </button>
          </div>
          <div className="mt-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg">
            <h2 className="text-4xl font-bold">Details</h2>
            <p className="mt-6">{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
