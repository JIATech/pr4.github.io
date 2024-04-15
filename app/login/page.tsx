"use client";
import React, { useState, FormEvent } from "react";
import styles from "./Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // lógica de autenticación
    console.log("Email: ", email, "Password: ", password);
    // Implementar autenticación aquí
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.title}>SPB</h1>
        <p className={styles.subtitle}>
          Bienvenido al Sistema de Legajo Virtual de Internos II
        </p>
        <p className={styles.description}>Para comenzar, inicie sesión.</p>

        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="password" className={styles.label}>
          Clave
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Ingresar
        </button>

        <a href="#" className={styles.forgotPassword}>
          ¿Olvidó su contraseña?
        </a>
        <p className={styles.helpText}>
          Para la recuperación de clave de acceso al sistema, comuníquese con la
          Dirección de Tecnología Informática, área Departamento de Soporte.
        </p>
      </form>
    </div>
  );
};

export default Login;
