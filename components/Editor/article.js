import React from "react";
import "./style.scss"

const NewArticle = () => {

  return (
    <section>
      <h3>New Article</h3>
      <p>发布一篇文章</p>
      <section>
        <div>
          + - 选择一篇封面图
          <br/>
          <input
            type="file"
            className="input-upload"
          />
        </div>

        <div className="article-editor">
          <textarea name="">

          </textarea>

          <br/>
          <button className="default-button">Create</button>
        </div>
      </section>
    </section>
  )
}

export default NewArticle