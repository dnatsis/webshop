import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

/**
 * A searchbox component for searching through all the products
 * @Component
 * @param {history} history destructured from match, used to push the url after searching for a product
 * @returns {Bootstrap:Form} returns a Bootstrap Form and button for searching
 */
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  /**
   * A submit handler for when the search box button is clicked
   * @function
   * @param {event} e the event in this case being a click
   * if there is something entered in the chat it pushes to /search with the keyword that was entered attached
   * if it is blank it just pushes back to the homescreen
   */
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products"
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
