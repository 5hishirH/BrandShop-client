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
    fetch("http://localhost:5000/products", {
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
    <div className="w-fit mx-auto">
      <form onSubmit={handleAddProduct} className="flex flex-col gap-8">
        <input
          name="image"
          type="url"
          placeholder="Paste the image url here"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodName"
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="brandName"
          type="text"
          placeholder="Brand name"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodType"
          type="text"
          placeholder="Product Types"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="prodPrice"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full max-w-xs"
          min='0'
          required
        />
        <input
          name="prodInfo"
          type="text"
          placeholder="About the product"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          name="rating"
          type="number"
          placeholder="Rating"
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

export default AddProduct;
