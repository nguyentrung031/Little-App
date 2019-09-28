import React, { Component } from 'react';
import Library from './Library';

class Container extends Component {
    render() {
        return (
            <div className="container-fluid p-0 wrapper ">
                <div className="row">
                    <div className="col-md-9">
                    </div>
                    <Library/>
                </div>
            </div>
        );
    }
}
export default Container;