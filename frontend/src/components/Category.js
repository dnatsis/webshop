import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Category = ({ category }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/categories/${category.name}`}>
        <Card.Img src={category.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/categories/${category.name}`}>
          <Card.Title as="div">
            <strong>{category.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Category;