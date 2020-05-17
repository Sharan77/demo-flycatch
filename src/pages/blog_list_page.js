import React from 'react'

import Card from '../components/card'
import NavBar from '../components/navbar'
import { getListOfPosts } from '../services'


class BlogListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pages: {},
            currentPage: 0,
            currentPageData: [],
            totalPages: 0,
        }
    }

    componentDidMount() {
        getListOfPosts().then(data => this.setState({ pages: data, currentPageData: data[this.state.currentPage] }))
    }

    RedirectPage = (id) => {
        this.props.history.push(`/post/${id}`);
    }

    handlePagination = page => {
        this.setState({
            currentPage: page,
            currentPageData: this.state.pages[page],
        })
    }

    render() {
        return(
            <>
                <NavBar currentRoute={this.props.match.url}/>
                <div className="container">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container1">
                            <h1 className="display-4">List of Blog Posts</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                            {
                                this.state.currentPageData.map(post => (
                                    <div className="col mb-4" key={post.id} >
                                        <Card title={post.title} description={post.body} postId={post.id} handleOpenPost={this.RedirectPage} postStyle/>
                                    </div>
                                ))
                            }
                    </div>
                    {
                        Object.keys(this.state.pages).length > 0 ? (
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    {
                                        Object.keys(this.state.pages).map((_,index) => (
                                            <li key={index} className={`page-item ${index === this.state.currentPage ? 'active': undefined}`} onClick={() => this.handlePagination(index)}>
                                                <span className="page-link">{index + 1}</span>
                                            </li>
                                        ))
                                    }
                            </ul>
                            </nav>
                        ) : undefined
                    }
                    
                </div>
            </>
        )
    }
}

export default BlogListPage