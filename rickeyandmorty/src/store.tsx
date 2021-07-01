import React, { useReducer } from 'react'

interface IState  {
               episodes:[],
               favorites:[],
               
}

interface IAction {
               type : string,
               value : any
}


// state store  


const initialState : IState =  { 
               episodes : [],
               favorites : [],
               
};



// store context api

export const Store= React.createContext<IState | any>(initialState)

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes  api Endpoint



// reducer which handlers operations
const reducer=(state : IState , action : IAction):IState=>{
      switch (action.type){

                     case 'FETCH_DATA':{
                                    return {...state , episodes : action.value}
                     }
                     default : {
                                    return state
                     }

      }
      
}


export  const StoreProvider   :React.FC =(props : any):JSX.Element=>{
             const [state , dispatch] = useReducer(reducer , initialState)
               
               return (
                             <Store.Provider value={{state , dispatch}} >{props.children}</Store.Provider>
               )
}
export default  Store;