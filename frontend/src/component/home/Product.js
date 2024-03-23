import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"
import DownloadsIcon from "../../images/downloads.png"

const Product = ({product}) => {
  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size: window.innerWidth < 600 ? 20:15,
    value:product.ratings,
    isHalf:true,
}

  return (
    <Link className='productCard' to={`/product/${product._id}`}>
        <img src={product.images_url} alt={product.name} />
        <p>{product.name}</p>
        <p className='organization'>{product.organization}</p>
        <p className='category'>{product.category}</p>
        <div>
            <ReactStars {...options} />
            <span>{product.reviews}</span>
            <span className='downloads'>{product.downloads} <img src={DownloadsIcon} alt='Download_icon'></img> </span>
        </div>
    </Link>
  )
}

export default Product