import React, { Component } from 'react';
import '../App.css';
import Container from './Container';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class App extends Component {
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Container/>
        </DndProvider>
      </div>
    );
  }
}

export default App;
