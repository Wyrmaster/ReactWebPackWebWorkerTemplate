import * as React from 'react';
import classes from './TestFunctionComponent.module.scss';

// region Interface

interface IProps {

}

interface IState {

}

// endregion

// region Component

const TestFunctionComponent = (props: IProps) => {

  return <span className={classes.classComponent}>Function Component</span>;
}

// endregion

// region Default Props

TestFunctionComponent.defaultProps = {}

// endregion

// region Export

export default TestFunctionComponent;

// endregion