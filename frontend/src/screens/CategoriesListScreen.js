import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { deleteCategory, listCategories } from '../actions/categoryActions';

const CategoriesListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories, page, pages } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push('/login');
    }

    dispatch(listCategories(pageNumber));
  }, [dispatch, history, userInfo, pageNumber, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCategory(id));
    }
  };

  const createCategoryHandler = () => {
    history.push(`/admin/categorylist/create/newcategory`);
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Categories</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createCategoryHandler}>
            <i className="fas fa-plus"></i> Create Category
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>
                    <LinkContainer to={`/admin/category/${category._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(category._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isCategoriesAndAdmin={true} />
        </>
      )}
    </>
  );
};

export default CategoriesListScreen;
