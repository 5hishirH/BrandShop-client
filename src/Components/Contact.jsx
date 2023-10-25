import React from "react";

const Contact = () => {
  return (
    <div className="mt-28 w-11/12 mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-6">
      <h2 className="text-4xl font-semibold text-center">
        <span className="">Contact</span> Us
      </h2>
      <div className="text-xl mt-6">
        <p>
          <span className="font-semibold">Email : </span>eventelegance@info.in
        </p>
        <p>
          <span className="font-semibold">Address : </span>Vestergaard Plads 9,
          5. th., Kjellerup
        </p>
        <p>
          <span className="font-semibold">Telephone : </span>31 98 11 00
        </p>
      </div>
    </div>
  );
};

export default Contact;
