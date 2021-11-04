export default function SignUpForm() {
  return (
    <form action="/api/createuser" method="POST">
      <label>
        Name
        <input id="name" name="name" type="text"></input>
      </label>

      <label>
        Email
        <input id="email" name="email" type="text"></input>
      </label>

      <label>
        Password
        <input id="password" name="password" type="password"></input>
      </label>
      <button type="submit">Signup</button>
    </form>
  );
}
