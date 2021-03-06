import React, { useState, useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { truncateName } from "../Configurations/nameConfigure";

const ProductComponent = ({
  name,
  rating,
  price,
  image,
  product_id,
  discountedPrice,
}) => {
  const [stars, setStars] = useState([]);

  const starRating = (rating) => {
    // const rating = 4;
    const starsArray = [];
    const roundedRating = Math.floor(rating);

    for (let i = 1; i <= roundedRating; i++) {
      starsArray.push("*");
    }

    setStars(starsArray);
  };

  useEffect(() => {
    starRating(rating);
  }, [rating]);

  return (
    <>
      <ProductContainer>
        <Card className="centered">
          <Image src={image} centered />
          <Card.Content>
            <Card.Header
              style={{
                fontSize: "13px",
                fontFamily: "Open Sans",
              }}
            >
              <Link
                to={`/products/${product_id}`}
                style={{ fontFamily: "Open Sans", color: "black" }}
              >
                {truncateName(name)}
              </Link>
            </Card.Header>
            <Card.Meta>
              Rating : {rating} <br />
              {stars.map((star, index) => (
                <img
                  width="15px"
                  key={index}
                  src="/images/star/star.png"
                  alt="star-rating"
                  className="products-rating-star"
                />
              ))}
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            $ :
            <span className={discountedPrice && `discount-price`}>{price}</span>
            {discountedPrice && <span> {discountedPrice} </span>}
          </Card.Content>
        </Card>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled.div`
  .card {
    max-width: 320px;
    height: 420px;
  }

  .image {
    width: 550px;
    max-height: 70%;
  }

  .discount-price {
    text-decoration: line-through;
    margin-right: 10px;
  }

  @media only screen and (max-width: 720px) {
    .card {
      width: 200px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 500px) {
    .card {
      width: 150px;
      height: 300px;
    }

    .products-rating-star {
      width: 10px;
    }
  }
`;

export default ProductComponent;
