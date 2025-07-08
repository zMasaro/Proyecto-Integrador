import CustomButton from "../components/CustomButton";

function Login() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <input
          type="email"
          placeholder="Correo"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          required
        />
        <br />
        <CustomButton
          text="Guardar"
          type="submit"
          id="save-button"
        />

      </form>
    </div>
  );
}

export default Login;
