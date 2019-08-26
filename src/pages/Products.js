import React from 'react';
import { connect } from 'react-redux';


class Products extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="container">
                <h4 className="align-content-center">
                    <p>products</p>
                    {this.props.products.map((p, i) => {
                        return (
                            <p>{p.name}</p>
                        )

                    })
                    }
                </h4>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {...state.products}
}

export default connect(mapStateToProps)(Products);
