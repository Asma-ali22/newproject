import { defineType, defineField } from "sanity";

export const items = defineType({


  name: "items",
  title: "items",
  type: "document",
  fields: [
    // Product Name
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    // Product Description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the product.",
      validation: (rule) => rule.required(),
    }),

    // Product Price
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),

    // Discount Price
    defineField({
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
      validation: (rule) => rule.min(0),
    }),

    // Product Color
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "The color of the product (e.g., Red, Blue, Green).",
    }),

    // Available Sizes
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      description: "List of available sizes (e.g., S, M, L).",
    }),

    // Product Image
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true, // Allows selecting a hotspot for the image
      },
      validation: (rule) => rule.required(),
    }),
  ],
});