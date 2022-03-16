const initState = {
    dario_balance: 0
  }
  
  const Reducer = (state=initState,action) => {
    switch (action.type){
    
        case "CHANGE_BALANCE":
          return {
            ...state,
            dario_balance: action.dario_balance
          }
          
        // you can have as many case statements as you need
          
        default: 
          return state
      }
  }
  
  export default Reducer