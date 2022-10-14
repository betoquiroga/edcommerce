import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductPage = () => {
  const params = useParams()

  const [ product, setProduct ] = useState({})
  const [ order, setOrder ] = useState()

  useEffect(() => {
    axios.get(`https://dev-ecommerce.alexyslozada.com/api/v1/public/products/${params.id}`)
    .then(data => setProduct(data.data.data))
  }, [])

  const createOrder = () => {
    const data = {
      "products": [
        {
          "product_id": product.id,
          "amount": 1,
          "unit_price": product.price
        }
      ]
    }
    axios.post("https://dev-ecommerce.alexyslozada.com/api/v1/private/purchase-orders", data, {
      headers: {
        Authorization: localStorage.getItem("tokenCommerce")
      }
    }).then(data => setOrder(data.data.data))
  }

  return (
    <div>
      <h1>Producto: {params.id}</h1>
      <p>{JSON.stringify(product)}</p>
      {order && <p>ORDEN: {order.id}</p>}
      { !order ? 
        <button className="bg-orange-200" onClick={createOrder}>CREAR ORDEN</button> :
        <PayPalScriptProvider options={{ "client-id": "AdomWD1SSXuqFpXcUfgMxYcQShoCUoINeBCnis7jNEfJJpbFfIW555tY9b6eX7pDlyiQB40WEk5AWGyp" }}>
              <PayPalButtons
                  createOrder={(data, actions) => {
                      return actions.order.create({
                          purchase_units: [
                              {
                                  amount: {
                                      value: product.price,
                                  },
                                  custom_id: order.id,
                              },
                          ],
                      });
                  }}
                  onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                          const name = details.payer.name.given_name;
                          alert(`Transaction completed by ${name}`);
                      });
                  }}
              />
          </PayPalScriptProvider>
        }
    </div>

  )
}

export default ProductPage