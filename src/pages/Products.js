import React from 'react';
import { connect } from 'react-redux';


class Products extends React.Component {
  handleClick = (e, p) => {
    e.stopPropagation(); //stop init adding item
    this.props.addProduct(p);
  }
  render() {
      return (
          <div className="container">
              <h4 className="align-content-center">
                  <p>Products</p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.products.map((p, i) => {
                        return (
                          <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>{p.name}</td>
                          <td>{p.price}</td>
                          <td> <button onClick={(e) => this.handleClick(e,p)}>Add</button></td>
                        </tr>
                        )
                      })
                    }
                    </tbody>
                  </table>    
              </h4>
          </div>
      );
  }
}

const mapStateToProps=(state)=>{
    return {...state}
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (p) =>{ 
      dispatch({ type: 'ADD_PRODUCT', product: p })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
