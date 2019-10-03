import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

var dragResource = {
  beginDrag : function (props) {
    console.log('hehe');
    return {
      data: props.data,
      type:props.type,
      image_url:props.image_url,
      id: props.id
    };
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    console.log(props.id);
    return props.changedrop(props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}
class DragSources extends Component { 
    render() {
      const { isDragging, connectDragSource} = this.props;
      var opicity = isDragging ? 0 : 1;
        return connectDragSource(
            <div className="img" style={{opicity}}>
                <img src={this.props.image_url} alt="element" />
                <div className="title">
                    {this.props.type}
                </div>
            </div> 
        );
    }
}
export default DragSource("element", dragResource, collect)(DragSources);