import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import timesIcon from '@iconify/icons-fa-solid/times';

import * as constants from "../constants";
import { getSortedPlace, getRowsArray, getRandomInt } from "../utils";
import { AwesomeComponent, HallPlaces, OrderForm, Button } from "../components/index";



export class ChoosePlace extends React.Component {
  state = {
    isLoading: true,
    space: [],
    selectedPlace: null,
    showForm: false,
    customer: null
  }

  componentDidMount() {
    fetch(`${constants.URL_SPACE_SHADOW}?session=${this.props.session._id}`)
      .then((tickets) => { return tickets.json() })
      .then((data) => {
        this.setLoading();
        this.getPlace(data.space);
      })
      .catch((error) => {
        this.setLoading();
        console.error(error)
      });
  };

  setLoading = () => this.setState({ isLoading: false });

  getPlace = (arr) => {
    const sortedByRow = getSortedPlace(arr, "row");
    const rows = getRowsArray(sortedByRow);
    const sortedRowsByPlace = rows.map(item => {
      return getSortedPlace(item, "place");
    });
    const booked = sortedRowsByPlace.map(elem => {
      const random = getRandomInt(2, 6);
      return elem.map(item => {
        if (item.place % random === 0) {
          return {
            ...item,
            booked: true
          };
        };
        return item
      });
    });
    this.setState({ space: booked });

    console.log("sortedRowsByPlace", sortedRowsByPlace)
  };

  handleSelectPlace = (data) => {
    this.setState({ selectedPlace: data })
  };

  handleOrderForm = () => {
    this.setState({ showForm: true })
  };

  handleClickBuy = (data) => {
    this.setState({customer: data})
  }

  render() {
    const { isLoading, space, selectedPlace, showForm, customer } = this.state;
    const { session, handleCloseModal } = this.props
    return (
      <div className="section-tickets" >
        <div className="section-tickets-modal" >
          {isLoading
            ? <AwesomeComponent />
            : <div>
              <h2 className="section-tickets-title" >{session.movie.title}</h2>
              <p className="section-tickets-hall" style={{ backgroundColor: session.room }} >Зал</p>
              <div className="section-tickets-time" >Начало: {new Date(session.date).toLocaleTimeString().slice(0, -3)} </div>
              {
                customer
                  ? <div>
                      <p>Ваш билет отправлен на электронную почту {customer.email} </p>
                      <h2>Приятного просмотра!</h2>
                  </div>
                  : <Fragment>
                      <HallPlaces space={space} handleSelectPlace={this.handleSelectPlace} />
                      { selectedPlace &&
                        <div>
                          <p>Ряд: {selectedPlace.row} Место: {selectedPlace.place} </p>
                          {
                            showForm
                              ? <OrderForm handleSubmitForm={this.handleClickBuy} />
                              : <Button buttonClass="button-buy" handleCloseModal={this.handleOrderForm} text="Оформить заказ" />
                          }
                        </div>
                      }
                    </Fragment>
              }

              <Icon onClick={handleCloseModal} className="button-close" icon={timesIcon} />
            </div>
          }
        </div>
      </div>
    )
  }
}
