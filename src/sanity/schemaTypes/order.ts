// sanity/schemas/order.js
import { defineType } from "sanity"
// export default  {
//     name: 'order',
//     type: 'document',
//     title: 'Order',
//     fields: [
//       {
//         name: 'customerName',
//         type: 'string',
//         title: 'Customer Name',
//       },
//       {
//         name: 'customerEmail',
//         type: 'string',
//         title: 'Customer Email',
//       },
//       {
//         name: 'customerPhone',
//         type: 'string',
//         title: 'Customer Phone',
//       },
//       {
//         name: 'customerAddress',
//         type: 'string',
//         title: 'Customer Address',
//       },
//       {
//         name: 'items',
//         type: 'array',
//         title: 'Items',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'product',
//                 type: 'reference',
//                 to: [{ type: 'product' }],
//               },
//               {
//                 name: 'quantity',
//                 type: 'number',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'total',
//         type: 'number',
//         title: 'Total Price',
//       },
//     ],
//   };
const orderSchema = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
      {
          name: 'customerName',
          type: 'string',
          title: 'Customer Name',
          validation: (Rule: any) => Rule.required(),
      },
      {
          name: 'customerEmail',
          type: 'string',
          title: 'Customer Email',
          description: 'The email address of the customer for order confirmation and communication.',
          validation: (Rule: any) => Rule.required().email(),
      },
      {
          name: 'customerPhone',
          type: 'string',
          title: 'Customer Phone',
          description: 'The phone number of the customer for order updates.',
          validation: (Rule: any) => Rule.required(),
      },
      {
          name: 'customerAddress',
          type: 'string',
          title: 'Customer Address',
          validation: (Rule: any) => Rule.required(),
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
                          validation: (Rule: any) => Rule.required(),
                      },
                      {
                          name: 'quantity',
                          type: 'number',
                          validation: (Rule: any) => Rule.required().min(1),
                      },
                  ],
              },
          ],
      },
      {
          name: 'total',
          type: 'number',
          title: 'Total Price',
          validation: (Rule: any) => Rule.required().min(0),
      },
      {
          name: 'status',
          type: 'string',
          title: 'Order Status',
          options: {
              list: [
                  { title: 'Pending', value: 'pending' },
                  { title: 'Shipped', value: 'shipped' },
                  { title: 'Delivered', value: 'delivered' },
                  { title: 'Cancelled', value: 'cancelled' },
              ],
              layout: 'dropdown',
          },
          validation: (Rule: any) => Rule.required(),
      },
      {
          name: 'createdAt',
          type: 'datetime',
          title: 'Order Date',
          description: 'The date and time when the order was placed.',
          options: {
              dateFormat: 'YYYY-MM-DD',
              timeFormat: 'HH:mm',
              timeStep: 15,
          },
          validation: (Rule: any) => Rule.required(),
      },
  ],
};

export default orderSchema;