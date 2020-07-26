//sign in
export default function signin(){
    Content.innerHTML=
    `<div class="row">
      <div class="col s12 m7">
        <form action="">
          <div class="card">
            <div class="card-action green white-text">
              <h5 class="center">Login</h5>
            </div>
            <div class="card-content">
              <div class="input-field">
                <i class="material-icons prefix">account_box</i>
                <input type="text" id="username" required>
                <label for="username">Enter your name or email</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock_box</i>
                <input type="password" id="password" required>
                <label for="password">Enter your password</label>
              </div>
              <p class="left">
                <label for="rem">
                  <input type="checkbox" id="rem"/>
                  <span>Remember me</span>
                </label>
              </p>
              <input value="login" type="submit" class="btn pulse" style="width:100%;">
            </div>
          </div>
        </form>
      </div>
  </div>`

}