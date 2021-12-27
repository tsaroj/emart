//For add item to cart
export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

//For delete item from cart
export const delCart = (product) => {
    return {
        type: "DELETE_ITEM",
        payload: product
    }
}