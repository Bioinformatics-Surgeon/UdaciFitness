import React from 'react';
import { View } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';

export default class App extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };
  increment = metric => {
    const { max, step } = getMetricMetaInfo(metric);

    this.setState(state => {
      const count = (state[metric] = step);

      return {
        ...state,
        [metric]: count > max ? max : count
      };
    });
  };

  render() {
    return <View>{getMetricMetaInfo('bike').getIcon()}</View>;
  }
}
