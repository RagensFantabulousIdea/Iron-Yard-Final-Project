import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Project from './Project'

class UserProjects extends Component {

    constructor(props){
        super(props)                                // super is required here
        this.getProjects = this.getProjects.bind(this)
        this.returnToSignin = this.returnToSignin.bind(this)
        this.deleteProject = this.deleteProject.bind(this) 
        // this.toggleProjectComplete = this.toggleProjectComplete.bind(this)
        this.state = {                                // state of the page                     
            projects: []                              //start with empty state  
        }
    }

    //LifeCycles Methods                                             
    componentWillMount(){ 
        this.getProjects()                 // put the data into it and change the state
    }

    componentWillReceiveProps() {
        this.getProjects()
    }

    //API Methods
    getProjects(){
        fetch('/api/projects?complete=' + (location.href.includes('/complete') ? 'true' : 'false') + '&token=' + sessionStorage.getItem('token'))
            .then(response => response.json())
            .then(projects => {
                this.setState({projects: projects})
            })
    }
    // functionality for signout
    returnToSignin() {
        if (sessionStorage.length == 1) {
            sessionStorage.clear()
        } else if (sessionStorage.length == 0) {
            browserHistory.push('/signin')
        }
    }

    deleteProject(id) {
        fetch('/api/projects/' + id + '?token='+ sessionStorage.getItem('token'), {method: 'DELETE'})
            .then(response => {
                this.getProjects()
            })
    }

    //     // functionality for checkbox
    // toggleProjectComplete(ProjectId, isComplete) {
    //     //  fetch('/api/v1/?' + ProjectId + '/' + (isComplete ? 'complete' : 'incomplete'))
    //     // .then(this.getProjects)
    //     }

    render() {
        let projects = this.state.projects.map((project, key) => <Project key={Date.now() + key} index={key} {...project} getProjects={this.getProjects} deleteProject={this.deleteProject}/>)

        if (projects.length === 0) {
            projects = <h4 className="text-center">No Active Projects Currently.</h4>
        }
       
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <br />
                    <button type="button" className="btn btn-success" onClick={() => browserHistory.push('/projects/new')}>Create New Project</button> &nbsp;
                     <button type="button" className="btn btn-warning" onClick={() => browserHistory.push('/projects')}>Incompleted Projects</button> &nbsp;
                     <button type="button" className="btn btn-primary" onClick={() => browserHistory.push('/projects/complete')}>Completed Projects</button>
                    <span id="logout" className="glyphicon glyphicon-off" onClick={this.returnToSignin}></span>
                    <hr/>
                </div>
               
                <div className="row">
                    <div className="col-sm-12 leftcolumn">
                        <h3><center>My Active Projects</center></h3>
                        <div className="row">
                            {projects}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProjects;
//{this.props.owner.id === }

// <Project id={1} title="Test Project 1" author="Manpreet" projectNumber="127837482378" description="This is just a test project, so ignore it." />
//                             <Project id={2} title="Test Project 2" author="Collin" projectNumber="39439jds" description="This is just a test project, so ignore it." />

 // let projects = this.state.projects.map((project, key) => <Project key={key} index={key} {...project} deleteProject={this.deleteProject} toggleProjectComplete={this.toggleProjectComplete}/>)