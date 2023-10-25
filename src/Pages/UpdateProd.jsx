import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProd = () => {
  const product = useLoaderData();
  const { _id, name, brand_name, type, info, rating, img, price } = product;

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
    fetch(`https://brand-shop-server-hazel-nine.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProd),
    })
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
    <div className="my-10 w-1/4 mx-auto">
      <h2 className="text-4xl font-bold text-center">Update Product</h2>
      <form onSubmit={handleUpdateProduct} className="mt-8 flex flex-col gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            name="image"
            type="url"
            defaultValue={img}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            name="prodName"
            type="text"
            defaultValue={name}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input
            name="brandName"
            type="text"
            defaultValue={brand_name}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Type</span>
          </label>
          <input
            name="prodType"
            type="text"
            defaultValue={type}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            name="prodPrice"
            type="number"
            defaultValue={price}
            className="input input-bordered w-full"
            min="0"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="prodInfo"
            type="text"
            defaultValue={info}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="rating"
            type="number"
            defaultValue={rating}
            className="input input-bordered w-full"
            min="0"
            max="5"
            required
          />
        </div>
        <input
          type="submit"
          value="Update"
          className="mt-2 btn btn-neutral cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UpdateProd;
