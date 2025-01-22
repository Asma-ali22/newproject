// import { client } from "@/sanity/lib/client";

// import { Product } from "../../types/product"
// import { Customer } from "../../types/customer";

// const CreateCustomerInSanity = async (customerInfo:Customer)=>
// {
//     try{
//     const customerObject = {
//         _type:"customer",
//         name:customerInfo.name,
//         email:customerInfo.email,
//         phone:customerInfo.phone
//     }

//     const response = await client.create(customerObject)
//     console.log("user created in sanity",response)
//     return response
//     }
//     catch(error)
//     {
//         console.log("error created user in sanity",error)
//         throw error
//     }
// }

// const CreateOrderInSanity = async (cartData:Product[], customer_id:string)=>
//     {
//         try
//         {
//             const orderObject = {
//                 _type:"order",
//                 customer:{
//                     _type:"reference",
//                     _ref:customer_id
//                 },
//                 items:cartData.map((item:Product)=>(
//                     {
//                         _type:"items",
//                         _id : item._id,
//                         product_name:item.name,
//                         product_description:item.description,
//                         product_price:item.price,
//                         quantity:1
//                     }
//                 )),
//                 order_date:new Date().toISOString()
//             }
        
//             const response = await client.create(orderObject)
//             console.log("order created in sanity",response)
//             return response
//         }   
//         catch(error)
//         {
//             console.log("error created order in sanity",error)
//             throw error
//         }
//     }
// export default async function CheckOut(cartData:Product[], customerInformation:Customer) {
//     try{
//         const customer = await CreateCustomerInSanity(customerInformation)
//         await CreateOrderInSanity(cartData,customer._id)
//         console.log("checkout completed")
//     }
//     catch(error)
//     {
//         console.log("error created order and customer in sanity",error)
//         throw error 
//     }
// }// app/checkout/page.tsx
// 'use client';

// import { useCartStore } from "@/app/store/cartStore";
// import { useState } from 'react';

// export default function CheckoutPage() {
//   const { cartItems, getTotalPrice } = useCartStore();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle order placement (e.g., send data to an API)
//     console.log('Order placed:', { ...formData, cartItems, total: getTotalPrice() });
//     alert('Order placed successfully!');
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-8">Checkout</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700">Address</label>
//           <input
//             type="text"
//             value={formData.address}
//             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//             className="w-full px-4 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mt-8">
//           <p className="text-xl font-semibold">
//             Total: ${getTotalPrice().toFixed(2)}
//           </p>
//           <button
//             type="submit"
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//           >
//             Place Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }