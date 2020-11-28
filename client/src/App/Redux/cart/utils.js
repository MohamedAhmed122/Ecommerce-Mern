export const addItemToCart = (cartItems, cartItemToAdd) => {
    // the Item is not new and it is exist in the Cart
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd }];
  };
  