import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import Compare from '../containers/compare';
import Chart from '../containers/chart';
import Performance from '../containers/performance';


const App = () => (
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
export default App;