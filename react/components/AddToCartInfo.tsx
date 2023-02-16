import React from "react"
import { useProduct } from "vtex.product-context"
import { useOrderForm } from "vtex.order-manager/OrderForm"
import { generateBlockClass } from "@vtex/css-handles"
import styles from "./styles.css"


const AddToCartInfo = ({blockClass}: {blockClass: string}) =>{
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__item_title = generateBlockClass(styles.container__item_title, blockClass)
  const container__item_image = generateBlockClass(styles.container__item_image, blockClass)
  const container__item_name = generateBlockClass(styles.container__item_name, blockClass)
  const container__item_price = generateBlockClass(styles.container__item_price, blockClass)
  const container__item_link = generateBlockClass(styles.container__item_link, blockClass)
  const container__item_quantity = generateBlockClass(styles.container__item_quantity, blockClass)
  const container__item_button = generateBlockClass(styles.container__item_button, blockClass)
  const container__item_button_link = generateBlockClass(styles.container__item_button_link, blockClass)
  const container__item_text = generateBlockClass(styles.container__item_text, blockClass)
  const productInfo = useProduct()
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log(items, totalizers, productInfo)
  return (
    <div className={container}>
		<p className={container__item_title}> !! SE HA AGREGADO CORRECTAMENTE EL PRODUCTO !!</p>
    {
      items.map((item:any, index: number) =>{
        console.log(item)
        return (
          <div key={index} className={container__item}>
            <div>
              <img src={item.imageUrls.at1x} className={container__item_image} style={{width:"96px", height: "96px"}}/>
            </div>
            <div>
              <p className={container__item_name}>{item.name} </p>
              <p className={container__item_price}>Precio: ${item.price / 100}</p>
              <p className={container__item_quantity}>Cant: {item.quantity}</p>
            </div>
          </div>
        )
      }
        )
    }
    <div>
      <p className={container__item_text}>Tienes {items.length} items en tu carrito, para continuar con el
      pago dirigte a <a href="/minicart" className={container__item_link}>Mi Carrito</a></p>
    </div >
    <div  className={container__item_button}>
      <a href="/" className={container__item_button_link}>Seguir comprando</a>
    </div>
    </div>
  )
}

export default AddToCartInfo
