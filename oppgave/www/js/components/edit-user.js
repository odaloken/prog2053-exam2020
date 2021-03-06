import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Edit User</title>
    </head>

    <form onsubmit="javascript: return false;" id="userForm" method="POST">

    <div style="width: 22rem;">
      <label for="email">Email</label>
      <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
    </div>

    <div style="width: 22rem;">
      <label for="firstName">First Name</label>
      <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
    </div>

    <div style="width: 22rem;">
      <label for="lastName">Last Name</label>
      <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>

    <div style="width: 22rem;">
      <label for="oldpwd">Old Password</label>
      <input type="password" class="form-control" id="oldpwd" name="oldpwd" type="text" value="">
    </div>

    <div style="width: 22rem;">
      <label for="newpwd">New Password</label>
      <input type="password" class="form-control" id="pwd" name="pwd" type="text" value="">
  </div>

  <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>

</form>
    `;
  }
  

  // The information about the user gets updated
  updateUser(e) { // Data from the HTML-form
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("Success, the user is now updated!");
        } else {
            console.log("Oh no, the user was not updated, try again!");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
