import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listFilteredProducts } from '../actions/productActions';

const CategoryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const name = match.params.name;

  const productFilteredList = useSelector((state) => state.productFilteredList);
  const { loading, products, error } = productFilteredList;

  useEffect(() => {
    dispatch(listFilteredProducts(name));
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
            {products.map((product, index) => (
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
