export default function LoginForm() {
  return (
    <form action="/api/login" method="POST">
      <label>
        Email
        <input id="email" name="email" type="text"></input>
      </label>

      <label>
        Password
        <input id="password" name="password" type="password"></input>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
