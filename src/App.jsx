import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [products, setProducts] = useState([])
  const [nombre, setNombre] = useState("Beto") 

  useEffect(() => {
    axios.get("https://dev-ecommerce.alexyslozada.com/api/v1/public/products")
      .then(data => {
        setProducts(data.data.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <button onClick={() => setNombre("Juanito")}>Es de chill!</button>
      <p>{nombre}</p>
      <div className="grid grid-cols-5 gap-6">
        { products.map(prod => (
          <div key={prod.id}>
            <div>
              <img src={prod.images[0]} alt={prod.product_name} />
              <h2>{prod.product_name}</h2>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default App
