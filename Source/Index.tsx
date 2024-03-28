// styles
import './Main.scss';
// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// other imports
import Worker from 'worker-loader!./Worker/Test.Worker';
import TestClassComponent from "./Component/TestClassComponent/TestClassComponent";
import TestFunctionComponent from "./Component/TestFunctionComponent/TestFunctionComponent";

const root:HTMLDivElement = document.querySelector('#MyApp');

class App extends React.Component<{/*Props*/}, {additionResult: number}> {

  constructor(props:any) {
    super(props);

    const reference: App = this;
    const worker: Worker = new Worker();

    this.state = {
      additionResult: 0
    };

    worker.onmessage = function(e) {
      reference.setState({additionResult: e.data});
      worker.terminate();
    };

    worker.postMessage(1)
  }

  render() {
    return (
      <div>
        <img src={require('./Images/logo.png')} alt={'test'}/>
        <p>Hello World</p>
        <p>{this.state.additionResult}</p>
        <TestClassComponent/>
        <TestFunctionComponent/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, root
);
