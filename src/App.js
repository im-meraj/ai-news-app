import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey =
  'e404cf0c5c120d4c99c123bb0b65056e2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
        }
      }
    })
  },[]);

  return (
    <>
      <h1>Alan AI News Application</h1>
    </>
  );
}

export default App;
