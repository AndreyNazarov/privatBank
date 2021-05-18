import Loader from 'react-loader-spinner';
import { Component } from 'react';
export default class Spinner extends Component {
  //other logic
  render() {
    return <Loader type="Audio" color="#00BFFF" height={80} width={80} />;
  }
}
