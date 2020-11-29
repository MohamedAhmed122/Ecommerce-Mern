
export const calculateTotal =(array) =>{
   return array.reduce((acc,item) => acc + item.price * item.qty, 0).toFixed(2)
}