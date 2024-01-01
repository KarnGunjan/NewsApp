import React, { Component } from "react";
import "./NewsItem.css";

export class NewsItem extends Component {
  render() {
    const { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className=" container my-3">
        <div className="card">
          <span
            className="position-absolute top-0 badge rounded-pill translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "91%" }}
          >
            {source}
          </span>

          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p className="card-text">
              <small className="text-muted" style={{ fontSize: "12px" }}>
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
