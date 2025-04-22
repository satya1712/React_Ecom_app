import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
export const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
              <section className="card">
                    <img className='card-img' src={img} alt={title} />
                    <div className="card-details">
                        <h3 className="card-title">
                            {title}
                        </h3>
                        <section className="card-reviews">
                            <FaStar className='rating-star'/> <FaStar className='rating-star'/> <FaStar className='rating-star'/><spam className="total-reviews">
                                {reviews}
                            </spam>
                        </section>
                        <section className="card-price">
                            <div className="price">
                                <del>{prevPrice}

                                </del>
                                  <span></span> {newPrice}
                            </div>
                            <div className="bag">
                                <FaBagShopping />
                            </div>
                        </section>
                    </div>

                </section>
    </div>
  )
}
