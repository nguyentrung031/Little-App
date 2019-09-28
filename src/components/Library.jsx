import React, { Component } from 'react';

class Library extends Component { g
    getItem = () =>{
       console.log(this.props.Id);
       
    } 
    render() {
        return (
            <div className="img">
                <img onClick={() => this.getItem()} src={this.props.Image} alt="" />
                <div className="title">
                    {this.props.Name}
                </div>
            </div> 
        );
    }
}

export default Library;