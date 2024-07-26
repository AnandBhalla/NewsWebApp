import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } =props;

  return (
    <div className="my-3">
      <div className="card" style={{height:"450px"}}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
        <span class="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageurl} className="card-img-top" style={{height:"200px", objectFit:"cover"}} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p class="card-text my-0">
            <small class="text-muted">By {author}</small>
          </p>
          <p class="card-text ">
            <small class="text-muted">on {date}</small>
          </p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
