import React from 'react';
import { browserHistory } from 'react-router';
// import { Link } from 'react-router';

class Project extends React.Component{
    constructor(props) {
        super(props)
        this.toggleCompleted = this.toggleCompleted.bind(this)

        this.state = {
            complete: props.complete
        }
    }
    toggleCompleted() {
        // moved variable out of if and else so that it is available to both of them without being repeated
        var token = sessionStorage.getItem('token');
        if (this.state.complete === false) {
            // var token = sessionStorage.getItem('token');
            // tell back-end that it's completed
            fetch('/api/projects/' + this.props.id + '?token=' + token, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    complete: true
                })
            })
            .then(response => {
                this.props.getProjects()
            })
        }
        else {
            // var token = sessionStorage.getItem('token');
            // tell back-end that it's completed
            fetch('/api/projects/' + this.props.id + '?token=' + token, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    complete: false
                })
            })
            .then(response => {
                this.props.getProjects()
            })
        }
    }

    render(){
        return (
            <div>
                <div className="col-sm-6 projectCard">
                    <div className="panel">
                        <div className="panel-heading projectPanelHeader">
                            <div className="row projectCardTitleBubble">
                                <div className="col-sm-9 projectCardTitle">
                                    <h3 className="projectTitle">{this.props.title.slice(0, 60)}...</h3>
                                </div>
                                <div className="col-sm-3 projectsOwnerMemberBubble">
                                    {this.props.owner.id == sessionStorage.getItem('userId') ? <span className="pull-right label bubbleText">Owner</span> : <span className="pull-right label bubbleText">Member</span>}
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-3 commentsIndicatorProjectCard">
                                    {this.props.assets.reduce((prev, next) => prev + next.comments.length, 0) > 0 ? <span className="commentIndicator glyphicon glyphicon-comment" aria-hidden="true">{this.props.assets.reduce((prev, next) => prev + next.comments.length, 0)}</span> : ''}
                                </div>

                                <div className="col-sm-9 projectCardCompleteCheck">
                                    <div className="form-check ownerCheck">
                                        {this.props.owner.id == sessionStorage.getItem('userId') ?
                                            <label className="form-check-label projectCompleteCheck">
                                                <input type="checkbox" className="form-check-input projectCompleteCheck" checked={this.state.complete} onChange={this.toggleCompleted} />
                                                &nbsp; Check if project is done
                                    </label> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-body panel-body-scroll">
                            <h4 className="carditems">{this.props.author}</h4>
                            <h4 className="carditems">{this.props.project_num}</h4>
                            <p>{this.props.description}</p>
                        </div>

                        <div className="panel-footer projectCardNavButtons">
                            {this.props.owner.id == sessionStorage.getItem('userId') ? <button type="button" className="btn projectButton projectDeleteButton" onClick={() => {if(confirm('Delete this project?')) {this.props.deleteProject(this.props.id)};}}>Remove</button> : <button type="button" className="btn projectButton projectDeleteButton" onClick={() => {if(confirm('Remove your membership from this project?')) {this.props.removeMember(this.props.id)};}}>Remove</button>}

                            <button type="button" className="btn projectButton" onClick={() => browserHistory.push('/edit/' + this.props.id)}>Edit</button>

                            <button type="button" className="btn projectButton" onClick={() => browserHistory.push('/invite/' + this.props.id)}>Invite</button>

                            <button type="button" className="btn projectButton projectShootButton" onClick={() => browserHistory.push('/shoot/' + this.props.id)}>Project Shoot List</button>

                        </div>
                    </div>
                </div>
            </div>
        )}
    }

export default Project;

// <div className="checkbox">
//                         <label className={this.props.completed === 'yes' ? 'done' : ''}>
//                             <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />
//                             {this.props.todo}
//                         </label>
//                     </div>

