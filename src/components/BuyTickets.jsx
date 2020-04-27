import React from 'react';
import ReactDom from "react-dom";

import { ChoosePlace } from "./ModalChoosePlace"

export class BuyTickets extends React.Component {
  root = document.createElement("div");
  body = document.querySelector("body");

  componentDidMount() {
    this.body.appendChild(this.root);
  };

  componentWillUnmount() {
    this.body.removeChild(this.root);
  };

  render() {
    const { session, handleCloseModal } = this.props
    return ReactDom.createPortal( <ChoosePlace session={session} handleCloseModal={handleCloseModal} />, this.root )
  }
}