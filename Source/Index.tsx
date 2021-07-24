// styles
import './Main.scss';
// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root = document.querySelector('#MyApp');

class App extends React.Component<{/*Props*/}, {/*State*/}> {
  render() {
    return (
      <div>
        <img src={require('./Images/logo.png')} alt={'test'}/>
        <p>Hello World</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, root
);
