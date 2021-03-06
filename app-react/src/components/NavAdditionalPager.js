import React, { Component } from 'react';
import { Link } from 'react-router';

class NavAdditionalPager extends Component {

    constructor(props) {
        super(props)
            this.upload = this.previousAsset.bind(this)
            this.upload = this.nextAsset.bind(this)
            this.state = {
                token: '',
                id: ''
        }
    }


    previousAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/previous?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => {window.location=('/shoot/' + this.props.params.projectId + '/assets/' + response.id + '/collaborate')})
    }

    nextAsset() {
        fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.params.assetId + '/next?token=' + sessionStorage.getItem('token'))
        .then(response => response.json())
        .then(response => {window.location=('/shoot/' + this.props.params.projectId + '/assets/' + response.id + '/collaborate')})
    }

render() {
    return (
        
        <div>
            <nav className="navAdditional" aria-label="...">
                <ul className="pager">
                    <li className="previous"><Link onClick={() => this.previousAsset()}><span aria-hidden="true">&larr;</span> Previous</Link></li>
                    <li className="next"><Link onClick={() => this.nextAsset()}>Next <span aria-hidden="true">&rarr;</span></Link></li>
                </ul>
            </nav>
        </div>
    );
  }
}

export default NavAdditionalPager;
// <Link className="nav-item projectNav" onClick={() => browserHistory.push('/projects/complete')}>