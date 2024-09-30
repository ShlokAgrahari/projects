export const getProducts=()=>async(dispatch)=>{
    try{
        const data=await fetch("/getproducts")
        const res=await data.json();
        dispatch({type:"SUCCESS",payload:res});
    }
    
    catch(error){
        dispatch({type:"FAIL",payload:error.response});
    }

}

