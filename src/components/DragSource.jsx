import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

var dragResource = {
  beginDrag : function (props) {
    console.log('hehe');
    return {
      type:props.type,
      image_url:props.image_url,
    };
  },

};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class DragSources extends Component { 
    render() {
      var connectDragSource = this.props.connectDragSource;
        return connectDragSource(
            <div className="img">
                <img src={this.props.image_url} alt="" />
                <div className="title">
                    {this.props.type}
                </div>
            </div> 
        );
    }
}
export default DragSource("Element", dragResource, collect)(DragSources);