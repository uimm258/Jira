import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

export const RegisterScreen = () => {
  const { register } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>register</button>
    </form>
  );
};
