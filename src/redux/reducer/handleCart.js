const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_ITEM":
            //check if product is already Exists
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //increase the quantity
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const product = action.payload;
                return [
                    ...state, {
                        ...product,
                        qty: 1,
                    }
                ]
            }

            break;
        case "DELETE_ITEM":
            const exists1 = state.find((x) => x.id === product.id);
            if (exists1.qty === 1) {
                return state.filter((x) => x.id !== exists1.id);
            } else {
                return state.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x);
            }

            break;

        default:
            return state;
            break;
    }

}
export default handleCart;