// styles
import './main.scss';
// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root: HTMLElement = document.querySelector('#MyApp');

class App extends React.Component<{/*Props*/}, {/*State*/}> {
  render() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, root
);
