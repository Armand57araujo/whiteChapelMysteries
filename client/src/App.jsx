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


const httpLink = createHttpLink({
  uri: '/graphql',
});

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




























