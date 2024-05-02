import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Productpage() {
  const [products, setProducts] = useState([]);
  // console.log(useParams);
  const { productId } = useParams(); // Assuming 'productId' is the URL parameter

  useEffect(() => {
    fetch("http://localhost:7880/iphones")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productId
        );
        setProducts(singleProduct);
        
        // console.log(singleProduct);
      });
  }, [productId]); // Dependency array with productId ensures useEffect runs when productId changes

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let details = product.product_description;

            return (
              
              <div
              key={id}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto `}>
                <div className="product-title">{title}</div>
                <div className="product-brief">{Brief}</div>
                <div className="starting-price">
                  {`Starting at ${StartPrice}`}
                </div>
                <div className="monthly-price">{PriceRange}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      {/* <Link to={productPage}>Learn more</Link> */}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-brief">{details}</div>
              <div className={`col-sm-12 col-md-6 `}>
                <div className="prodict-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Productpage