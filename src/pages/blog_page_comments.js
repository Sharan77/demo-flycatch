import React from 'react'

import { getPostDetails, getCommentsDetails } from '../services'

import Card from '../components/card'
import NavBar from '../components/navbar'

class BlogPageComments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id : props.match.params.id,
            title: 'Loading please wait',
            comments: [],
            description: '',
        }
    }
    componentDidMount() {
        getPostDetails(this.state.id).then(data => this.setState({
            title: data.title,
            description: data.body,
        }))
        getCommentsDetails(this.state.id).then(data => this.setState({
            comments: data,
        }))
    }
    render() {
        return (
            <>
           
                <NavBar currentRoute={this.props.match.url}/>
                <div className="container">
                    <h3 className="text-center mb-5 mt-2">Post Number  -  {this.state.id}</h3>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{this.state.title}</h1>
                            <p className="lead">{this.state.description}</p>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="text-center">List of Comments</h3>
                        <ul className="list-group">
                            {
                                this.state.comments.length > 0 ? (
                                    this.state.comments.map(comment => (
                                        <li className="list-group-item" key={comment.id}>
                                            <Card title={comment.name} description={comment.body} email={comment.email}/>
                                            
                                        </li>
                                    ))
                                ) : (
                                    <h5>Loading Comments</h5>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default BlogPageComments