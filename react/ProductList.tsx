import React, { useState } from 'react'
import { Button } from 'vtex.styleguide'

import ListItem from './components/ListItem'
import { initialProductsToAdd, Product } from './__fixtures__/ProductList'

function ProductList() {
  const [productList, setProductList] = useState<Product[]>(
    initialProductsToAdd
  )

  const onRemoveProduct = (productId: string) => {
    const filteredProductList = productList.filter(
      (product) => product.id !== productId
    )

    setProductList(filteredProductList)
  }

  return (
    <div className="ph9 pv8">
      <Button
        size="small"
        onClick={() => {
          setProductList(initialProductsToAdd)
        }}
      >
        Original list
      </Button>
      {productList.map((product) => (
        <ListItem
          key={product.id}
          product={product}
          onRemove={onRemoveProduct}
        />
      ))}
    </div>
  )
}

export default ProductList
