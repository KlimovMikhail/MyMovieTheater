import React from 'react';

export class Image extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.fallback = () => {
      if (this.props.defaltImage) {
        this.setState({ failed: true });
      }
    };
  }ж

  render() {
    if (this.state.failed) {
      return <img src={this.props.defaltImage} alt="img" />;
    } else {
      return <img src={this.props.src} onError={this.fallback} alt="img" />;
    };
  };
};