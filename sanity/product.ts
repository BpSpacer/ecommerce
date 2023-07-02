export const product = {
    name: "product",
    type: "document",
    title: "product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },
        {
            name: "description",
            title: "Product description",
            type: "string"
        },
        {
            name: "price",
            title: "Product Price",
            type: "number"
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: "category"
                },
            ]
        }
    ]
}