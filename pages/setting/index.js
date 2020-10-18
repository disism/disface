import Head from 'next/head'
import React from "react"
import GoBack from "../../components/Icons/back";
import AccountEdit from "../../components/Account";
import "./style.scss"

const Setting = () => {

  return (
    <div>
      <Head>
        <title>Setting</title>
      </Head>
      <GoBack />
      <main>
        <h1>SETTING</h1>
        <AccountEdit />
        <button className="default-button">Save Change</button>

        <hr/>
        <section className="input-radio">
          <p>设置账号类型</p> <br/>
          <input type="radio"/> 公开 <br/>
          <input type="radio"/> 私密
        </section>
        <button className="default-button">Save Change</button>

        <hr/>
        <section>
          <p>更改接收邮箱</p> <br/>
          <input type="email"/>
        </section>

        <button className="default-button">Save Change</button>

        <hr/>
        <p>更改接收邮箱</p> <br/>
        <span>原密码</span> <br/>
        <input type="password"/> <br/>
        <span>新密码</span> <br/>
        <input type="password"/> <br/>
        <span>验证</span> <br/>
        <input type="password"/>
        <br/>
        <button className="default-button">Save Change</button>

        <hr/>
        <p>选择需要推送的类型</p>
        <div className="push-type">
          <ul>
            <li><input type="radio"/> 推送频道更新</li>
            <li><input type="radio"/> 新投稿通知</li>
            <li><input type="radio"/> 推送关注人的更新</li>
            <li><input type="radio"/> 文章被 LIKE，被关注</li>
          </ul>
          <button className="default-button">Save Change</button>
        </div>

        <hr/>
        <p>删除账户功能</p> <br/>
        <button className="default-button">Delete Account</button>

        <hr/>
        <button className="default-button">从其他实例中导入您的个人数据</button>
        <button className="default-button" style={{ marginLeft: `1rem` }}>导出您的数据</button>
      </main>
    </div>
  )
}

export default Setting