import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

var dropField = {
  drop: function (props, monitor) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
      item.left = Math.round(item.left + delta.x);
      item.top = Math.round(item.top + delta.y);

  }
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
      var connectDropTarget = this.props.connectDropTarget;
        return connectDropTarget(
            <div className="col-md-9">
              
             </div>
        );
    }
}

export default DropTarget('Element', dropField, collect)(DropTargets);