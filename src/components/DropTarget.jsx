import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

var dropField = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
    console.log(props.data.id);
    return props.updatedrag(props.data.id);
  },
  
};

function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      hovered: monitor.isOver(),
      item: monitor.getItem(),
    }
  }
class DropTargets extends Component {
    render() {
      const { connectDropTarget, hovered} = this.props;
      const backgroud = hovered ? '#460b31' : 1;
        return connectDropTarget(
               <div className='img-drop' style={{background: backgroud}}>
                  <img src={this.props.image_url} alt=""/>
              </div>
        );
    }
}

export default DropTarget('element', dropField, collect)(DropTargets);