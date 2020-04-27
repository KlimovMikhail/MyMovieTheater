import React from 'react';
<<<<<<< HEAD

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
=======
import defaltImage from "../assets/images/film.jpg";

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      errored: false,
    };
    console.log("props.src" , props.src)
  }

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: defaltImage,
        errored: true,
      });
    }
  }

  render() {
    const { src } = this.state;
    const { src: _1, ...props } = this.props;
    return (
      <img
        src={src}
        alt="img"
        onError={this.onError}
        {...props}
      />
    );
  }
}

// import React from 'react';
// import defaltImage from "../assets/images/film.jpg";

// export default class Image extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       src: props.src,
//     };
//   }

//   onError = () => {
//     this.setState({
//       src: defaltImage,
//     });
//   }

//   render() {
//     const { src } = this.state;
//     return (
//       <img
//         src={src}
//         alt="img"
//         onError={this.onError}
//       />
//     );
//   }
// }
>>>>>>> 80b14fd21ef1f4f90332aa72f87fe0fa6996225d
