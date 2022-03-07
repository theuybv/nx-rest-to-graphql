import { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'urql';
import { graphqlClient } from './graphqlClient';
import { useNewsAndEventQuery } from './types';
import Dashboard from './dashboard/dashboard';

const Index: FC = () => {
  const [result, reexecuteQuery] = useNewsAndEventQuery({ pause: true });
  const { fetching, data } = result;
  let interval: number;

  useEffect(() => {
    interval = window.setInterval(() => {
      // reexecuteQuery({ requestPolicy: 'network-only' });
    }, 3000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  if (fetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={reexecuteQuery}>Load data</button>
      {data?.news?.list?.map(newsItem => <>
        <p>#{newsItem?.uid}</p>
        <h3>{newsItem?.title}</h3>
      </>)}
    </div>
  );
};

export function App() {
  return (
    <Provider value={graphqlClient}>
      <Route path='/' exact component={Index} />
      <Route path='/dashboard' exact component={Dashboard} />
    </Provider>
  );
}

export default App;
