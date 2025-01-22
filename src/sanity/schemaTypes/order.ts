// sanity/schemas/order.js
export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'customerName',
        type: 'string',
        title: 'Customer Name',
      },
      {
        name: 'customerEmail',
        type: 'string',
        title: 'Customer Email',
      },
      {
        name: 'customerPhone',
        type: 'string',
        title: 'Customer Phone',
      },
      {
        name: 'customerAddress',
        type: 'string',
        title: 'Customer Address',
      },
      {
        name: 'items',
        type: 'array',
        title: 'Items',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                to: [{ type: 'product' }],
              },
              {
                name: 'quantity',
                type: 'number',
              },
            ],
          },
        ],
      },
      {
        name: 'total',
        type: 'number',
        title: 'Total Price',
      },
    ],
  };