import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProd = () => {
  const product = useLoaderData();
  const { _id, name, brand_name, type, info, rating, img, price } =
    product;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const j = e.target;

    const name = j.prodName.value;
    const brand_name = j.brandName.value;
    const type = j.prodType.value;
    const price = j.prodPrice.value;
    const info = j.prodInfo.value;
    const rating = j.rating.value;
    const img = j.image.value;

    const updatedProd = {
      name,
      brand_name,
      type,
      price,
      info,
      rating,
      img,
    };

    console.log(updatedProd);

    // send data to the server
    fetch(
      `https://brand-shop-server-hazel-nine.vercel.app/products/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProd),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-2xl text-center">Update Product</h2>
      <form onSubmit={handleUpdateProduct} className="flex flex-col gap-8">
        <input
          name="image"
          type="url"
          defaultValue={img}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodName"
          type="text"
          defaultValue={name}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="brandName"
          type="text"
          defaultValue={brand_name}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodType"
          type="text"
          defaultValue={type}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodPrice"
          type="number"
          defaultValue={price}
          className="input input-bordered w-full max-w-xs"
          min="0"
          required
        />
        <input
          name="prodInfo"
          type="text"
          defaultValue={info}
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="rating"
          type="number"
          defaultValue={rating}
          className="input input-bordered w-full max-w-xs"
          min="0"
          max="5"
          required
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-neutral cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UpdateProd;
