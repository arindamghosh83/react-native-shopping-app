import Products from '../../data/dummy-data'
const initialState = {
    availableProducts: Products,
    userProducts: Products.filter(product => product.ownerId === 'u1')
}

export default (state= initialState, action) => {
    return state;
}