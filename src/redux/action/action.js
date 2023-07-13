export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

// for the del functionality;
export const DEL=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

// for the removing individual items;
// export const REMOVE=(iteam)=>{
//     return{
//         type:"RMV_ONE",
//         payload:iteam
//     }
// }