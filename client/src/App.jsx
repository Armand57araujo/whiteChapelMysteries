import React from 'react';
import './App.css';
import DialogueBox from './components/DialogueBox';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Outlet } from 'react-router-dom';
import {setContext} from '@apollo/client/link/context'
import './styles.css';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// function App() {

//   const startGame = () => {
// //Add logic to start game

//     console.log("starting game...")
//   };


//   return (
//     <div className="App">
//       <h1>Welcome To White Chapel Mysteries</h1>
//       <button className = "pixelated-button" onClick={startGame}>Start Game</button>
//       <DialogueBox />
//     </div>
//   );
// }

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
       
          <Outlet/> 
           {/* <DialogueBox />  */}
      </ApolloProvider>
    </>
  );
}

export default App;




























