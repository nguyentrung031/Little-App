import React, { Component } from 'react';
import DropTargets from './DropTarget';
import DragSources from './DragSource';
import Data from './../constants/Element.js';
import {connect} from 'react-redux';
class Container extends Component {
    changedrop = (idDrag) =>{
        this.props.changedropdrap(idDrag);
    }
    updatedrag = (idDrop) => {
        this.props.changeUpdate(idDrop);
   
    }
    render() {
        const element = Data.elements;
        const drap= Data.drag;
        return (
            <div className="container-fluid p-0 wrapper ">
                <div className="row">
                    <div className="col-md-9">
                        {
                            drap.map((value,key) =>{
                                return(
                                    <DropTargets key={key} id={value.id} data={value} type={value.type} image_url={value.image_url} updatedrag={(id) => this.updatedrag(id)} />
                                )
                            })
                        }
                    </div>
                    <div className="col-md-3">
                        {
                            element.map((value,key) =>{
                                return(
                                    <DragSources key={key} data={value} id={value.id} type={value.type} image_url={value.image_url}  changedrop={(id) => this.changedrop(id)}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
           
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        // isDrop: state.isDrop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changedropdrap: (idDrag,idDrop) => {
            dispatch({
                type:"CHANGE_DRAP_DROP",
                idDrag,
                idDrop
            })
        },
        changeUpdate: (idDrop) => {
            dispatch({
                type:"CHANGE_UPDATE",
                idDrop
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)


