// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
// Import your Todos and Completed components here...
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import UserProjects from './components/UserProjects'
import CreateProject from './components/CreateProject'
import Invite from './components/Invite'
import Project from './components/Project'
import ProjectShootList from './components/ProjectShootList'
import ProjectCreateCard from './components/ProjectCreateCard'
import ProjectAssetEditCard from './components/ProjectAssetEditCard'
// import ProjectShootFullCard from './components/ProjectShootFullCard'
// import ProjectShootMiniCard from './components/ProjectShootMiniCard'
// import ProjectPhotoCollaboratingPhotoCard from './components/ProjectPhotoCollaboratingPhotoCard'
import ProjectPhotoCollaborating from './components/ProjectPhotoCollaborating'
// import ProjectAllPhotosList from './components/ProjectAllPhotosList' 
// import ProjectExtraPhotosList from './components/ProjectExtraPhotosList'
// import ProjectExtraPhotosCard from './components/ProjectExtraPhotosCard'
import FullSizedImageView from './components/FullSizedImageView'
//Manpreet added a new component edit.js
import Edit from './components/Edit'
import EditUser from './components/EditUser'
import CommentsTopLevel from './components/CommentsTopLevel'
//  import EditMessage from './components/EditMessage'
// import completedProjects from './components/completedProjects'



// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/projects/complete" component={UserProjects} />
            <Route path="/projects/new" component={CreateProject} />
            <Route path="/invite/:projectId" component={Invite} />
            <Route path="/projects/:projectId/view" component={Project} />
            <Route path="/projects/:projectId/edit" component={CreateProject} />
            <Route path="/edit/:projectId" component={Edit} />
            <Route path="/shoot/:projectId" component={ProjectShootList} />
            <Route path="/shoot/:projectId/createcard" component={ProjectCreateCard} />
            <Route path="/shoot/:projectId/assets/:assetId/editcard" component={ProjectAssetEditCard} />
            <Route path="/shoot/:projectId/assets/:assetId/collaborate" component={ProjectPhotoCollaborating} />
            <Route path="/shoot/:projectId/assets/:assetId/photos/:id" component={FullSizedImageView} />
            <Route path="/edituser/:userId" component={EditUser} />
            <Route path="/commentsbox" component={CommentsTopLevel} />
            <Route path="/(:project_token)" component={Welcome} />
        </Router>
    }
}

export default Routes
            
//  <Route path="/signup(?:token)" component={SignUp} />