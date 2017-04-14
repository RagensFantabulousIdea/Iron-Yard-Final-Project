import React, { Component } from 'react';

import { browserHistory, Link } from 'react-router';

import ProjectShootList from './ProjectShootList';


class ProjectShootMiniCard extends Component {

    constructor(props) {
        super(props)
    }

    // componentWillMount() {
    //     console.log(this.props)
    // }


  render() {

//only show the commentIndicator span if there are new messages on that figure.

// href=`{browserHistory.push('/shoot/' + this.props.params.projectId + '/assets' + this.props.params.id + '/collaborate')}`
    return (
        <div>
                <Link to={'/shoot/' + this.props.projectId + '/assets/' + this.props.id + '/collaborate'}><div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="panel">
                        <div className="panel-heading imagePanel">
                            <span className="commentIndicator glyphicon glyphicon-comment pull-right" aria-hidden="true"></span> <br/>
                            
                            {this.props.frame_selected ? <img src={this.props.frame_selected} alt="selection" /> : ''}
                        </div>
                        
                        <div className="panel-heading miniCardHeading">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h3 className="panel-title">{this.props.figure_num}</h3>
                                </div>

                                <div className="col-xs-6">
                                    <h3 className="panel-title pull-right">Order: {this.props.order_num}</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <p><span>{this.props.asset_description}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="panel-footer miniCardFooter">
                            <div className="row">
                                <div className="col-xs-6">
                                    <p>{this.props.date_of_shoot}</p>
                                </div>

                                <div className="col-xs-6">
                                    <p className="pull-right">{this.props.time_of_shoot}</p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
            </Link>
        </div>
    );
  }
}

export default ProjectShootMiniCard;