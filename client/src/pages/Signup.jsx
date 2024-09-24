import "../scss/signup.scss";

function Signup() {
  return (
    <div className="signup-body">
      <h1>Signup</h1>
      <form className="sign-up-form">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
