const products = [];

export const getProductsReducers = (state = { products }, action) => {
    switch (action.type) {
        case "SUCCESS": // Updated to match the action creator
            return { products: action.payload };
        case "FAIL": // Updated to match the action creator
            return { error: action.payload };
        default: 
            return state;
    }
};
