import React from 'react'

const Card = (props) => (
    <div className={`card ${props.postStyle ? 'cursor-pointer' : ''}`} onClick={props.handleOpenPost ? () => props.handleOpenPost(props.postId):undefined}>
        
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            {props.email ? (<p className="card-text"><small className="text-muted">{props.email}</small></p>) : null }
        </div>
    </div>
)

export default Card;