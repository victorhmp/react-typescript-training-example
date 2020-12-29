import React from 'react'
import { FormattedCurrency } from 'vtex.format-currency'
import { Button } from 'vtex.styleguide'

import { Product } from '../__fixtures__/ProductList'

interface Props {
  product: Product
  onRemove: (productId: Product['id']) => void
}

function ListItem({ product, onRemove }: Props) {
  return (
    <div className="flex pv3">
      <img src={product.imageUrl} alt={product.name} />
      <div className="ml4 flex flex-column justify-between">
        <div>
          <p className="c-muted-1 t-small">{product.brand}</p>
          <p className="c-on-base t-title lh-copy fw6">{product.name}</p>
          <FormattedCurrency value={product.price} />
        </div>
        <div>
          <Button
            style={{ width: '140px' }}
            size="small"
            variation="danger"
            onClick={() => {
              onRemove(product.id)
            }}
          >
            Remove item
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ListItem
