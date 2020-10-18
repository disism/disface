import React from "react";
import "./style.scss"

const NewStatus = () => {

  return (
    <section>
      <h3>New Article</h3>
      <p>发布一篇状态</p>
      <section>
        <div className="status-editor">
          <textarea name="">

          </textarea>
        </div>

        <div>
          + - 添加状态图片
          <br/>
          <input
            type="file"
            className="input-upload"
          />
        </div>


        <br/>
        <button className="default-button">Create</button>
      </section>
    </section>
  )
}

export default NewStatus