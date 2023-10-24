import React from "react";

const AddProduct = () => {
  return (
    <div>
      <form>
        <input
          name="image"
          type="text"
          placeholder="Enter your img link here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="productName"
          type="text"
          placeholder="Brand Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="brandName"
          type="text"
          placeholder="Brand name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="prodType"
          type="text"
          placeholder="Product Types"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="prodInfo"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          name="rating"
          type="number"
          placeholder="Rating"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value='Add'
          className="input input-bordered w-full max-w-xs cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddProduct;
