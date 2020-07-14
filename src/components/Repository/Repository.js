import React from "react";
import "./Repository.css";

const Repository = (props) => {
    console.log(props);

    const tag = props.data.private ? <span className="tag is-dark">Private</span> : <span className="tag is-info">Public</span>;
    return (
        <li id={props.data.id}>
            <div className="Repository card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.data.name}
                    </p>
                    {tag}
                </header>
                <div className="card-content">
                    <div className="content">
                        <time dateTime={props.data.created_at}>Created: {props.data.created_at}</time>
                        <br/>
                        <time dateTime={props.data.updated_at}>Last update: {props.data.updated_at}</time>
                        <br/>
                        {props.data.description}
                    </div>
                </div>
                <footer className="card-footer">
                    <a className="button is-link card-footer-item" href={props.data.html_url}>Link</a>
                </footer>
            </div>
        </li>
    )
}

export default Repository;