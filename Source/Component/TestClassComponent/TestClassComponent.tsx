import * as React from 'react';
import classes from './TestClassComponent.module.scss';


// region Interface

interface IProps {

}

interface IState {

}

// endregion

// region Component

class TestClassComponent extends React.Component<IProps, IState> {

  // region Default

  static defaultProps = {};

  // endregion

  // region Constructor

  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  // endregion

  // region Override

  public override render() {
    return <span className={[classes.classComponent, 'global'].join(' ')}>Class Component</span>;
  }

  // endregion

  // region Event

  // endregion

}

// endregion

// region Export

export default TestClassComponent;

// endregion