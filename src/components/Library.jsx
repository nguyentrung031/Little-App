import React, { Component } from 'react';

class Library extends Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="img">
                    <img src="https://littlealchemy2.com/static/icons/4.svg" alt="" />
                    <div className="title">
                        aria
                    </div>
                </div>
                <div className="img">
                    <img src="https://littlealchemy2.com/static/icons/3.svg" alt="" />
                    <div className="title">
                        earth
                    </div>
                </div>
                <div className="img">
                    <img src="https://littlealchemy2.com/static/icons/2.svg" alt="" />
                    <div className="title">
                        fire
                    </div>
                </div>
                <div className="img">
                    <img src="https://littlealchemy2.com/static/icons/1.svg" alt="" />
                    <div className="title">
                        water
                    </div>
                </div>
             </div>
        );
    }
}

export default Library;