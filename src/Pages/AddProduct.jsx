import React from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const j = e.target;

    const name = j.prodName.value;
    const brand_name = j.brandName.value;
    const type = j.prodType.value;
    const price = j.prodPrice.value;
    const info = j.prodInfo.value;
    const rating = j.rating.value;
    const img = j.image.value;

    const newProd = {
      name,
      brand_name,
      type,
      price,
      info,
      rating,
      img,
    };
    console.log(newProd);
    // send data to server
    fetch("https://brand-shop-server-hazel-nine.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-10 w-1/3 mx-auto">
      <h2 className="text-4xl font-bold">Add new product</h2>
      <form onSubmit={handleAddProduct} className="mt-8 flex flex-col gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            name="image"
            type="url"
            placeholder="Paste the image url here"
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
            placeholder="Product Name"
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
            placeholder="Brand name"
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
            placeholder="Product Types"
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
            placeholder="Price"
            className="input input-bordered w-full"
            min="0"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">About Product</span>
          </label>
          <input
            name="prodInfo"
            type="text"
            placeholder="About the product"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            name="rating"
            type="number"
            placeholder="Rating"
            className="input input-bordered w-full"
            min="0"
            max="5"
            required
          />
        </div>
        <input
          type="submit"
          value="Add"
          className="mt-2 btn btn-neutral cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddProduct;
