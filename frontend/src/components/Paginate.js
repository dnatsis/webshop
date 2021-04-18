import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/**
 * A component for adding pagination to a page
 * @Component
 * @param {Number} pages number of total pages to paginate through
 * @param {Number} page current page
 * @param {Boolean} isAdmin a boolean that is true when the page being paginated is for an Admin
 * @param {String} keyword keyword used in the search bar for paginating search results
 * @param {Boolean} isCategories passed in true when paginating through categories instead of products
 * @param {Boolean} isCategoriesAndAdmin passed in true when paginating through categories on the admin screens
 * @param {String} name name of category passed into the link for pagenating through products of a single category
 * @param {Boolean} isCategory passed in true when paginating through products of a single category
 * @returns {Bootstrap:Pagination} returns a bootstrap Pagination component and Link-Container for handling the links
 */
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
