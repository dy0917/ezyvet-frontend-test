import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class Cart extends React.Component {
   get newItemsCheapestFirst() {
        
        const d = _.chain(this.props.cart)
        .groupBy("name")
        .map((value, key) => ({ name: key, price:value[0].price, products: value }))
        .value();
        return d;
      }

    render() {
        return (
            <div className="container">
                <h4 className="align-content-center">
                    <p>Cart</p>
                    </h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        this.newItemsCheapestFirst.map((p, i) => {
                          return (
                            <tr key={i}>
                            <th scope="row">{i}</th>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td></td>
                          </tr>
                          )
                        })
                      }
                      </tbody>
                    </table>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
