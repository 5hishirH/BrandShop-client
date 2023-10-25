import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProdDetails = () => {
    const { name, brand_name, type, info, rating, img, price } = useLoaderData();
  return (
    <div>
        <p>{name}</p>
        <img src={img} alt="" />
        <p>{brand_name}</p>
        <p>{type}</p>
        <p>{rating}</p>
        <p>{price}</p>
        <p>{info}</p>
    </div>
  )
}

export default ProdDetails