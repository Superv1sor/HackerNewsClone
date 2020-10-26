
export default function Article({ article, index }) {
    return (
      <article className="Story">
        <div className="Story_container">
          <div className="Story_data">
            <div className="Story_title">{article.text}</div>
            <div className="Story_meta">
              <span><a href="">xxx points</a></span>
              <span className="Story_separator">|</span>
              <span><a href=""><span>dwwoelfel</span></a></span>
              <span className="Story_separator">|</span>
              <span><a href="">X years ago</a></span>
              <span className="Story_separator">|</span>
              <span><a href="">{article.num_comments} comments</a></span>
            </div>
          </div>
        </div>
      </article>
    );
}
