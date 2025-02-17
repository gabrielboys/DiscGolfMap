import { useEffect, useState } from "react";
import { resultList } from "./controllers/controllers";


export default function IndexTest() {
   
    const [results, setResults] = useState(resultList.state);

  useEffect(
    () => resultList.subscribe(() => setResults(resultList.state)),
    [resultList]
  );
  if (!results.results.length) {
    return <div>No results</div>;
  }

  return (
    <div className="result-list">
        
    Items Returned: {results.results.length}
      
      <ul>
        {results.results.map((result) => (

        

          <li key={result.uniqueId}>
        
            dhjafkljdklsfjdklsf
            <article>
              <h2>{result.title}</h2>
              <p>{result.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
  }