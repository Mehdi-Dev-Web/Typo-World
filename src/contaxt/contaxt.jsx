// import { createContext, useReducer } from "react";
// const uducers = (state ,action)=>{
//     switch(action.type){ 
//         case "login" :
//             return{
//                 users  : action.payload
//             }
//         case "logout" :
//             return{
//                 users  : null
//             }
//             default :
//             return state
//         }


// }
// let nitial = {
    //     users : null
    // }
    
    
    // export const ContextProvider = createContext()
    // export const ProviderContaxt = (props)=>{
        //     const [state , dispatch] = useReducer(uducers,nitial)
        //     return(
            // <ContextProvider.Provider value={{
                // user: state.users,
                // dispatch
                // }}>
                //      {props.children}
                // </ContextProvider.Provider>
                //     )
                // }
                //! new context
                import { useReducer } from "react";
                import { createContext } from "react";
              
                const working = (state,action)=>{
                    switch(action.type){
                        case "change" : 
                        return{
                            ...state,
                            number : action.payload,
                        }

                        default:
                          return  state
                    }
                }
                const initial = {number : 0};
                export const ContextProvider = createContext()
                export const AppProvider = (props)=>{

                    const [state,dispatch]= useReducer(working,initial)
                    return(
                    <ContextProvider.Provider 
                    value={{
                        num : state.number,
                        dispatch
                    }}>
                         {props.children}
                    </ContextProvider.Provider>

                    )

                }
                