import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { listCategories } from '../actions/categoryActions';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Category from '../components/Category';

const CategoriesScreen = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories, error } = categoryList;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <>
      <h1>Categories</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {categories.map((category) => (
              <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
                <Category category={category} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default CategoriesScreen;
