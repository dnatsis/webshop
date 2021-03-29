import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions';

const CategoryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  var reducedProducts = products.reduce(function (filtered, product) {
    if (product.category === match.params.name) {
      var someNewValue = {
        name: product.name,
        image: product.image,
        description: product.description,
        brand: product.brand,
        category: product.category,
        price: product.price,
        countInStock: product.countInStock,
        rating: product.rating,
        numReviews: product.numReviews,
      };
      filtered.push(someNewValue);
    }
    return filtered;
  }, []);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Link to="/categories" className="btn btn-light">
        Go Back
      </Link>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {reducedProducts.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default CategoryScreen;
