import React, { Component } from 'react';
import { Container, Content, Tab, Tabs } from 'native-base';

import { Compare, Chart, Performance } from '../containers';

class App extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Chart">
            <Chart />
          </Tab>
          <Tab heading="Compare">
            <Compare />
          </Tab>
          <Tab heading="Performance">
            <Performance />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default App;