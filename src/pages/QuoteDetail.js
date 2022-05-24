import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Maximilian', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  /* Match contains
  Object { path: "/quotes/:quoteId", url: "/quotes/q1", isExact: true, params: {…} }
​   isExact: true
​   params: Object { quoteId: "q1" }
​   path: "/quotes/:quoteId"
​   url: "/quotes/q1"*/
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        {/*Solo se mostrara cuando estemos en esa ruta exacta, por lo que al pinchar el link y cambiar se ocultara*/}
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load component</Link>
        </div>
      </Route> 
      
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
