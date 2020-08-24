import React from 'react';
import { Link } from 'react-router-dom';

const ResultList = ({ results, deleteResult, history }) => (
  <>
    <h1>Years:</h1>
    {
      results.map( r =>
        <>
          <Link to={{
            pathname: `/results/${r.id}`,
            state: {...r}
          }} >
            <h1>{r.year}</h1>
            <div>
              <button onClick={() => deleteResult(r.venue_id, r.id, history)}></button>
            </div>
          </Link>
          <br />
        </>
      )
    }
  </>
)

export default ResultList;