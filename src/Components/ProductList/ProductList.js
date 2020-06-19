import React, { Component } from 'react'
import Products from '../Products/Products'
import ProductlistTitle from '../ProductlistTitle/ProductlistTitle'
import { ProductConsumer } from '../../Context/Context'
import './ProductList.css'

export class ProductList extends Component {
    state={
        search : ''
    }
  
    render() {
    console.log(this.state.search)

        return (
            <React.Fragment>
                <ProductlistTitle name="our" title="products"/>
                <div className="row mx-auto text-center">
                    <div className="col-10 mx-auto col-lg-2">
                      
                    <input placeholder="Search Item" className="form-control text-dark" onChange={(e) => this.setState({ search: e.target.value })}/>
                    </div>
                    <div className="col-10 mx-auto my-auto col-lg-2 media-query">
                    <div className="dropdown ">
                        <button class="btn btn-outline-warning dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                        </button>
                        <div className="dropdown-menu ml-md-5" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item " onClick={() => this.setState({ search: '' })}>All</a>
                            <a className="dropdown-item " onClick={() => this.setState({ search: 'Xboy' })}>Male</a>
                            <a className="dropdown-item" onClick={() => this.setState({ search: 'FeMale' })}>Female</a>
                            <a className="dropdown-item" onClick={() => this.setState({ search: 'Child' })}>Children</a>
                            
                        </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
               
                    <ProductConsumer>
                        {(value)=>{
                        let filterArray = value.products.filter(
                            (eachitem) =>{
                                return eachitem.catagory.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1;
                                    
                                
                            }
                        );
                            
                        return filterArray.map(eachitem =>{
                            return <Products key={eachitem.id} products={eachitem}/>
                        })
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment>
          
        )
    }
}

export default ProductList
