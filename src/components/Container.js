import React, { Component } from 'react';
import DropTargets from './DropTarget';
import DragSources from './DragSource';
import A from './../constants/Element.js';

class Container extends Component {
    render() {
        var element = A.elements;
        var drag = A.drag;
        return (
            
            <div className="container-fluid p-0 wrapper ">
                <div className="row">
                    <div className="col-md-9">
                        {
                            drag.map((value,key) =>{
                                return(
                                    <DropTargets key={key} id={value.id} data={value} type={value.type} image_url={value.image_url} />
                                )
                            })
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            element.map((value,key) =>{
                                return(
                                    <DragSources key={key} id={value.id} data={value} type={value.type} image_url={value.image_url} />
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

