import axios from "axios"

const Login = () => {

  const submitForm = (e) => {
    e.preventDefault()

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axios.post("https://dev-ecommerce.alexyslozada.com/api/v1/public/login", userData)
      .then(data => {
        localStorage.setItem("tokenCommerce", data.data.data.token)
      })
      .catch(e => console.log(e))
  } 

  return (
    <div>
      <form onSubmit={submitForm}>
        <input className="bg-gray-200" type="email" placeholder="email" name="email" required />
        <input className="bg-gray-200" type="password" placeholder="contraseña" name="password" required/>
        <button type="submit" className="bg-orange-300">Iniciar sesión</button>
      </form>
    </div>
  )
}

export default Login