import React from "react";
import "./style.scss"

const AccountEdit = () => {
  return (
    <section className="account-form">
      <h1>在这里完善您的账户资料</h1>
      <h2>Edit Your Avatar</h2>
      <input type="file"/>
      <h2>Edit Your Name</h2>
      <div className="account-edit-name">
        <div>
          <label htmlFor="firstname">First Name:</label>
          <br/>
          <input name="name" type="text"/>
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <br/>
          <input type="text"/>
        </div>
      </div>

      <h2>Bio</h2>
      <div className="account-bio">
        <textarea type="text"/>
      </div>
    </section>
  )
}

export default AccountEdit