import React, { Component } from 'react';
import UserNavBar from './UserNavBar';
import FooterArea from './FooterArea';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'

class createproject extends Component {
    constructor(props) {
        super(props)
        this.addProject = this.addProject.bind(this)
        this.state = {
            title: '',
            author: '',
            projectNumber: '',
            description: '',
            token: '',
            getProjects: props.getProjects
        }
    }

    addProject(title, author, projectNumber, description) {
        //console.log(this.props.params.projectId)

        //Post to /api/projects
        if (
            this.state.title !== '' &&
            this.state.author !== '' &&
            this.state.description !== ''
        ) {
            var token = sessionStorage.getItem('token');
            
            fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    author: this.state.author,
                    project_num: this.state.projectNumber,
                    description: this.state.description,
                    token: token
                })
            })
                .then(response => response.json())
                .then(response => {
                    //  clear the form fields
                    this.setState({
                        title: '',
                        author: '',
                        projectNumber: '',
                        description: ''
                    })

                    browserHistory.push('/projects')
                })
            }
            else {
                alert('You must fill in title, author, and description before saving.')
        }
    }

    render() {
        //console.log(this.props.params.projectId)
        return (
            <div className="createProject">
                <UserNavBar />
                    <h1>Create a Project</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <div className="panel">
                                    <div className="panel-heading slimPanelHeader">
                                    </div>
                                        <div className="panel-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="title">Title</label>
                                                    <input type="text" className="form-control" required onChange={(e) => this.setState({title: e.target.value})} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="author">Author</label>
                                                    <input type="text" className="form-control" required 
                                                    onChange={(e) => this.setState({author: e.target.value})}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="projectnumber">Project Number</label>
                                                    <input type="text" className="form-control" 
                                                    onChange={(e) => this.setState({projectNumber: e.target.value})}/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="description">Description of project</label>
                                                    <textarea className="form-control" placeholder="body" rows="5" required 
                                                    onChange={(e) => this.setState({description: e.target.value})}/>
                                                </div>
                                                
                                            </form>
                                        </div>
                                        <div className="panel-footer projectCardNavButtons">
                                            <button type="button" className="btn projectButton" onClick={this.addProject}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                <FooterArea />
            </div>
        );
    }
}
export default createproject;

