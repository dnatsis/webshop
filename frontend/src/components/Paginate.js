import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = '',
  isCategories = false,
  isCategoriesAndAdmin = false,
  name = '',
  isCategory = false,
}) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              isCategory
                ? `/categories/${name}/page/${x + 1}`
                : isCategories
                ? `/categories/page/${x + 1}`
                : isCategoriesAndAdmin
                ? `/admin/categorylist/${x + 1}`
                : !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
