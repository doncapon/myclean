import React, {Component} from 'react';
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";

class FunfactItem extends Component {

    state = {
        appear: false
    }

    visibleChangeHandler = (isVisible) => {
        if(isVisible){
            this.setState({
                appear: true
            })
        }
    }

    render() {
        return (
            <div className="col-md-3 col-sm-12">
                <div className="facts_wrapper">
					<div className="icon-lay">
                        <i className={`${this.props.counterIcon}`}> </i>
                    </div>
                    <h3 className="stat-count count">
                        <CountUp start={this.state.appear ? 0 : null} end={this.props.counterNumber}>
                            {({ countUpRef }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <VisibilitySensor
                                        onChange={(isVisible) => this.visibleChangeHandler(isVisible)}>
                                        <span className="sr-only">+</span>
                                    </VisibilitySensor>
                                </div>
                            )}
                        </CountUp>
                    </h3>
                    <h5>{this.props.counterText}</h5>
                </div>
            </div>
        );
    }
}

export default FunfactItem;