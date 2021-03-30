import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { listCategories } from '../actions/categoryActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../components/Paginate';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Category from '../components/Category';

const CategoriesScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, categories, error, pages, page } = categoryList;

  useEffect(() => {
    dispatch(listCategories(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
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
          <Paginate pages={pages} page={page} isCategories={true} />
        </>
      )}
    </>
  );
};

export default CategoriesScreen;
