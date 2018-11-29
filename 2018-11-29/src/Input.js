import React from 'react';
import {connect} from 'react-redux';

import {fetchGetProduct, fetchPostPurchase} from './fetch';

const CODE_COMPLETE = /^\d\d\d\d$/;
const QUANTITY_COMPLETE = /^\d+$/;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      description: '',
      hasGotProduct: false,
      isGettingProduct: false,
      isPostingPurchase: false,
      quantity: '',
      unit: '',
    };
  }

  onChangeCode = event => {
    const code = event.target.value;
    this.setState({
      code,
    });
  };

  onClickEnter = () => {
    this.setState(
      {
        isGettingProduct: true,
      },
      () => {
        fetchGetProduct(this.state.code).then(
          product => {
            this.setState({
              code: product.id,
              description: product.description,
              hasGotProduct: true,
              isGettingProduct: false,
              unit: product.unit,
            });
          },
          error => {
            this.setState({
              isGettingProduct: false,
            });
            this.props.dispatch({
              type: 'GET_PRODUCT_FAILURE',
              message: error.message,
            });
          },
        );
      },
    );
  };

  onChangeQuantity = event => {
    const quantity = event.target.value;
    this.setState({
      quantity,
    });
  };

  onClickAdd = () => {
    this.setState(
      {
        isPostingPurchase: true,
      },
      () => {
        const {code, description, quantity, unit} = this.state;
        fetchPostPurchase({code, description, quantity, unit}).then(
          purchase => {
            this.setState({
              code: '',
              description: '',
              hasGotProduct: false,
              isGettingProduct: false,
              isPostingPurchase: false,
              quantity: '',
              unit: '',
            });
            this.props.dispatch({
              type: 'ADD_PURCHASE_SUCCESS',
              purchase,
            });
          },
          error => {
            this.setState({
              // do not clear the code
              description: '',
              hasGotProduct: false,
              isGettingProduct: false,
              isPostingPurchase: false,
              quantity: '',
              unit: '',
            });
            this.props.dispatch({
              type: 'ADD_PURCHASE_FAILURE',
              message: error.message,
            });
          }
        )
      }
    );
  }

  render() {
    const {
      code,
      description,
      hasGotProduct,
      isGettingProduct,
      isPostingPurchase,
      quantity,
    } = this.state;
    const isCodeComplete = CODE_COMPLETE.test(code);
    const isQuantityComplete = QUANTITY_COMPLETE.test(quantity);
    return (
      <form>
        <fieldset>
          <label>
            <span>PLU code</span>
            <input
              type="text"
              name="code"
              value={code}
              onChange={this.onChangeCode}
              disabled={isGettingProduct}
            />
          </label>
          <button
            onClick={this.onClickEnter}
            disabled={!isCodeComplete || isGettingProduct || hasGotProduct}
          >
            Enter
          </button>
        </fieldset>
        <fieldset>
          <label>
            <span>description</span>
            <input
              type="text"
              name="description"
              readOnly
              value={description}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <span>quantity</span>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={this.onChangeQuantity}
              disabled={!hasGotProduct || isPostingPurchase}
            />
          </label>
          <button
            onClick={this.onClickAdd}
            disabled={
              !hasGotProduct || !isQuantityComplete || isPostingPurchase
            }
          >
            Add to Cart
          </button>
        </fieldset>
      </form>
    );
  }
}

export default connect(null)(Input);
