import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BrandDetails = () => {
const brandData = useLoaderData()

  return (
    <div>
        {
            brandData.brandName
        }
    </div>
  )
}

export default BrandDetails