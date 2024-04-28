import { useState } from "react";

import { useRequestLogin } from "../../api/requests/auth";

export function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync: requestLogin, isPending } = useRequestLogin();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("Login:", login, "Password:", password);
    const values = {
      login,
      password,
    };
    // Here you would usually call your backend API to perform the login
    requestLogin(values);
  };

  return (
    <div>
      <h2>Sign in page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Username or Email:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
