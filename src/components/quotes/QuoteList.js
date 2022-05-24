import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory()
  const location = useLocation()
  console.log(history)
  /*Location contains
    hash: ""​
    key: "prt2h9"​
    pathname: "/quotes"​
    search: "?sort=asc"​
    state: undefined*/
  const queryParams = new URLSearchParams(location.search)
  const isAscending = queryParams.get('sort') === 'asc'
  const sortingHandler = () => {
    history.push(`${location.pathname}?sort=${isAscending ? 'desc' : 'asc'}`)
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>Sorting {isAscending ? 'ascending' : 'descending'}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
