import React from 'react';
import {connect} from 'react-redux';

import {
  deletePurchase,
  getPurchases,
} from './action.js';

class Purchases extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPurchases());
  }
  render() {
    const {dispatch, purchases} = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col" className="code">
              code
            </th>
            <th scope="col" className="description">
              description
            </th>
            <th scope="col" className="quantity">
              quantity
            </th>
            <th scope="col" className="unit">
              unit
            </th>
            <th scope="col" className="delete" />
          </tr>
        </thead>
        <tbody>
          {purchases.map(purchase => (
            <tr key={purchase.id}>
              <td className="code">{purchase.code}</td>
              <td className="description">{purchase.description}</td>
              <td className="quantity">{purchase.quantity}</td>
              <td className="unit">{purchase.unit}</td>
              <td className="delete">
                <button onClick={() => { dispatch(deletePurchase(purchase.id)); }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({purchases}) => ({purchases});

export default connect(mapStateToProps)(Purchases);
