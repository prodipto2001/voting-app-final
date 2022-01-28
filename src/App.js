import react from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Homepage from './Homepage';

function App() {
  return (
    <ChakraProvider>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
