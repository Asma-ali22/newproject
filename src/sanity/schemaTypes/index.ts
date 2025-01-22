import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { items } from './items'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,items],
}
