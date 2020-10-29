export default function Article({ article, index }) {
  const moment = require('moment');
  const timestamp = article.created;
  console.log("Created: " + article.created);
  console.log("TS: " + timestamp);
  // const formatted = moment(timestamp).format('dddd');
  // const formatted = moment(timestamp).format('YYYYMMDD');
  const formatted = moment.unix(timestamp).fromNow();
  // const formatted = moment(timestamp, "YYYYMMDD").fromNow();

    return (
      <article className="Story">
        <div className="Story_container">
          <div className="Story_data">
            <div className="Story_title">
              <a href=""><span>{article.text}</span></a>
              <a href={article.url} target="_blank" className="Story_link">({article.url})</a>
            </div>
            <div className="Story_meta">
              <span><a href="">{article.points} points</a></span>
              <span className="Story_separator">|</span>
              <span><a href=""><span>{article.author}</span></a></span>
              <span className="Story_separator">|</span>
              
              <span><a href=""></a>{formatted}</span>
              <span className="Story_separator">|</span>
              <span><a href="">{article.comments} comments</a></span>
            </div>
          </div>
        </div>
      </article>
    );
}
