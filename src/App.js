import React from 'react';
import Classprops from './Classprops';
import Functionprops from './Functionprop';
class App extends React.Component {
  render() {
  return (
    <div>
  <Classprops name="Learner 1" place="place X"><p>Child Component </p></Classprops>
  <Classprops name="Learner 2" place="place Y"><button>Click</button></Classprops>
  <Classprops name="Learner 3" place="Place Z"/>
   <Functionprops name="Learner 4" place= "PlaceA" />
    </div>
  );
  }
}

export default App;
