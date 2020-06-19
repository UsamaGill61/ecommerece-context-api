import React, { Component } from 'react'

 class DefaultRoute extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <span className="display-4">404</span>
                        <h4>Error</h4>
                        <h5>Page Not Found</h5>
        <h3>The Requested URL  <span className="text-danger">{this.props.location.pathname}</span> Was Not Found</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default DefaultRoute
