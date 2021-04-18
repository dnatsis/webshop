import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';
/**
 * A component that pulls the top products from the redux state and displayes them in a carousel
 * @Component
 * @returns A Bootstrap Carousel with the current top products
 */
const ProductCarousel = () => {
  const dispatch = useDispatch();
  /**
   * Retrieves the productTopRated from the global Redux state
   * @const
   * @param {state} state.productTopRated productTopRated state from redux
   */
  const productTopRated = useSelector((state) => state.productTopRated);
  /**
   * destructures loading, error , and products from productTopRated state
   * @property {Boolean} loading true or false if products are still being loaded
   * @property {String} error a string with the error thrown if there is one
   * @property {Array} products an array of product objects
   */
  const { loading, error, products } = productTopRated;

  /**
   * useEffect for dispatching listTopProducts action
   * @function
   * @param {dispatch} dispatch useEffect dependency to fire of useEffect when ever dispatch is fired off.
   */
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
