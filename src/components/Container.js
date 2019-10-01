import React, { Component } from 'react';
import DropTargets from './DropTarget';
import DragSources from './DragSource';
import A from './../constants/Element.js';

class Container extends Component {
    render() {
        var element = A.elements
        return (
            <div className="container-fluid p-0 wrapper ">
                <div className="row">
                    <DropTargets />
                    <div className="col-md-3">
                        {
                            element.map((value,key) =>{
                                return(
                                    <DragSources key={key} type={value.type} image_url={value.image_url} />     
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

