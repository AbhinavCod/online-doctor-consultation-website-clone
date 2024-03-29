import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-clients";
import { loadStripe,Stripe } from "@stripe/stripe-js";


type AppContext = {
    isLoggedIn : boolean;
    stripePromise:Promise<Stripe | null>;
    paymentIntentId:string;
    clientSecret:string;
    price:string;
    setId:(Id:string)=>void;
    setSecret:(Id:string)=>void;
    setAmount:(num:Number)=>void;
    email:string;
    setEmailId:(id:string)=> void;
   
};


const AppContext = React.createContext<AppContext | undefined>(undefined);
const stripePromise = loadStripe("pk_test_51Oh9rESBL00bWoeBE4qeTjSao0na4NCb3TDzdFgnQKLaac5CxZFc6j91pP0vmpLV1MIow2wFA0zKCPZJYMd1onxG00R4LYynOE")

export const AppContextProvider = ({children}:{children:React.ReactNode})=>{
    const [paymentIntentId,setPaymentIntentId] = useState("");
    const [clientSecret,setClientSecret] = useState("");
    const [price,setPrice] = useState("");
    const [email,setEmail] = useState("");
    
    const setEmailId = (id:string)=>{
        setEmail(id)
    }

    const setId = (Id:string)=>{
        setPaymentIntentId(Id);
    }
    const setSecret = (secret:string)=>{
        setClientSecret(secret);
    }
    const setAmount = (num:Number)=>{
        setPrice(JSON.stringify(num));
    }
    const {isError} = useQuery("valdateToken",apiClient.validateToken,{
        retry:false
    })
    return(
        <AppContext.Provider value={{
            isLoggedIn:!isError,
            stripePromise,
            paymentIntentId,
            clientSecret,
            price,
            setId ,
            setSecret,
            setAmount,
            email,
            setEmailId,
            
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = ()=>{
    const context = useContext(AppContext);
    return context as AppContext;
}