import React, { useState } from 'react'
import './Item.css'

const Item = ({item,index}) => {

    const [blue, setBlue] = useState(false)

    const products = item.products
products.sort(function(a,b) {
  return a.price -b.price
})
var min = products[0]
var max = products[products.length - 1]

const MaxOrMin= index%2 === 0 ? 'mayor': 'menor'
const name =  index%2 === 0 ? max.name : min.name
const price = index%2=== 0 ? max.price : min.price
    return (
        <div
        style={{cursor:'pointer'}}
        className={blue ? 'blue' : 'item'}
        onClick={() => setBlue(!blue)}
        >
        <p> <strong>{item.name}</strong>: tiene <strong>{item.products.length}</strong> productos - su <strong>{MaxOrMin}</strong> producto es <strong>{name}</strong>: con precio <strong>{price}$</strong> </p>
      </div>
    )
}

export default Item
