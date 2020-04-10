import React from 'react';
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