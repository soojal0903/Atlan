import React, { Fragment, useEffect } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails
} from "../../actions/ProductActions.js";
import Loader from "../layout/loader/Loader.js";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { Rating } from "@material-ui/lab";
import {useParams} from "react-router-dom";
import Prism from "prismjs";
import "./prism.css";
require("prismjs/components/prism-python.min.js");

const ProductDetails = ({match}) => {

  const {id} = useParams();

  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } });

  useEffect(() => {
    dispatch(getProductDetails(id));
  },[dispatch,id]);

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- AIHub`} />
          <div id="mainPage">
            <div className="ProductDetails">
              <div>
                <div>
                  <img className="CarouselImage" src={product.images_url} alt={product.name} />
                </div>
              </div>

              <div>
                <div className="detailsBlock-1">
                  <h2>{product.organization}/{product.name}</h2>
                  <p>Model-ID # {product._id}</p>
                </div>
                <div className="detailsBlock-2">
                  <Rating {...options} />
                  <span className="detailsBlock-2-span">
                    {" "}
                    ({product.reviews} Reviews)
                  </span>
                </div>
                <div className="detailsBlock-3">
                  <h1>{`Downloads : ${product.downloads}`}</h1>
                </div>

                <div className="detailsBlock-4">
                  Category : <p>{product.category}</p>
                </div>
              </div>
            </div>

            <div id="description" className="ProductDetails">
              <h3>Model Description</h3>
              <p>{product.description}</p>
            </div>
            <div id="use" className="ProductDetails">
              <h3>How to Use</h3>
              <div className="code-container">
                <pre className="preContainer"><code id="codeSnippet" className="language-python">{product.code}</code></pre>
              </div>
            </div>
            <div id="usecases" className="ProductDetails">
              <h3>Potential Use Cases</h3>
              <p>{product.use}</p>
            </div>
            <div className="tryBlock">
              <a href={product.tryModel} className="try" target="_blank" rel="noreferrer">Try Model</a>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;