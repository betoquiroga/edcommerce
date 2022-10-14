import axios from "axios"

const ProductForm = () => {

  const submitForm = (e) => {
    e.preventDefault()

    const productData = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
        modelo: e.target.model.value
      },
    }

    axios.post("https://dev-ecommerce.alexyslozada.com/api/v1/admin/products", productData, {
      headers: {
        Authorization: localStorage.getItem("tokenCommerce")
      }
    })
      .then(data => {
        localStorage.setItem("tokenCommerce", data.data.data.token)
      })
      .catch(e => console.log(e))
  } 

  return (
    <div>
      <h1>Crear producto</h1>
      <form onSubmit={submitForm}>
        <input className="bg-gray-200" type="text" placeholder="Nombre" name="productName" required />
        <input className="bg-gray-200" type="number" placeholder="Precio" name="price" required/>
        <input className="bg-gray-200" type="text" placeholder="Imagen URL" name="image" required/>
        <input className="bg-gray-200" type="text" placeholder="Descripción" name="description" required/>
        <input className="bg-gray-200" type="text" placeholder="Color" name="color" required/>
        <input className="bg-gray-200" type="text" placeholder="Modelo" name="model" required/>
        <button type="submit" className="bg-orange-300">Crear producto</button>
      </form>
    </div>
  )
}

export default ProductForm