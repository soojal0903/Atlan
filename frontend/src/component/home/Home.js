import React, { Fragment, useEffect } from 'react'
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js"
import MetaData from "../layout/MetaData.js"
import {getProduct} from "../../actions/ProductActions.js"
import {useSelector,useDispatch} from "react-redux"
import Loader from "../layout/loader/Loader.js"
import { useAlert } from 'react-alert';

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,error,products} = useSelector((state)=>state.products)

  useEffect(() => {
    if(error){
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch,error,alert])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="AIHUB" />

          <div className="banner">
            <p>Welcome to AIHub</p>
            <h1>FIND AMAZING AI MODELS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Models</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment> 
  )
}

export default Home