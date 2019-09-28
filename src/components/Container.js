import React, { Component } from 'react';
import Library from './Library';
import data from './../data.json'

class Container extends Component {
    render() {
        return (
            <div className="container-fluid p-0 wrapper ">
                <div className="row">
                    <div className="col-md-9">
                    </div>
                    <div className="col-md-3">
                        {
                            data.map((value,key) =>{
                                return(
                                    <Library key={key} Id={value.id} Name ={value.name} Image={value.img}/>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        );
    }
}
export default Container;