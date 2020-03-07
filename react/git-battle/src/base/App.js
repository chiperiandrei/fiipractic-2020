import React from 'react';
import { Box, Playground } from '../assets/styles/App';
import './App.css';
import Button from '../components/ButtonSwitch';

class App extends React.Component {
  render() {
    return [<Playground />, <Box>
      <Button type='success' />
    </Box>]
  }
}

export default App;
