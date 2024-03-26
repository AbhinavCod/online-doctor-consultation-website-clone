import { ConfirmPaymentData } from "./components/ConfirmPaymentForm";
import { LoginFormData } from "./components/Login";
import { OfflineBookingFormData } from "./components/OfflineBookingForm";
import { SignUpData } from "./components/RegisterationForm";
import { AddDoctorData } from "./pages/AddDoctorPage";

export const login = async(formData:LoginFormData)=>{
    const response = await fetch("/api/auth/login",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(formData),
    });

    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
}

export const signup = async (formData:SignUpData)=>{
    const response = await fetch("/api/user/register",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(formData),
    })

    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
}

export const signupDoctor = async (formData:SignUpData)=>{
    const response = await fetch("/api/user/registerDoctor",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(formData),
    })

    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
};

export const logout = async()=>{
    const response = await fetch("/api/auth/logout",{
        method:"POST",
        credentials:"include"
    })

    if(!response.ok){
        throw new Error("Logout Failed");
    };

    const data = response.json();
    return data;
}

export const validateToken = async()=>{
    const response = await fetch("/api/auth/validate-token",{
        credentials:"include"
    })

    const body = await response.json();
    if(!response.ok){
        throw new Error("Token Invalid");
    };
    return body;
}

export const offlineBooking = async (formData:OfflineBookingFormData)=>{
    const response = await fetch("/api/booking/offline-booking",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
    });
    console.log(response);

    if(!response.ok){
        throw new Error("Booking Failed");
    }

    const data = await response.json();
    return data;
};

export const createPaymentIntent = async(formData:OfflineBookingFormData)=>{
    const response = await fetch("/api/stripe/payment-intent",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    })

    const data = await response.json();
    console.log(data);
    if(!response.ok){
        throw new Error("Failed to create payment intent");
    }
    return data;

}

export const confirmPayment = async(formData:ConfirmPaymentData)=>{
    const response = await fetch("/api/stripe/confirm-payment",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    });

    if(!response.ok){
        throw new Error("Payment Failed");
    };

    return response.json();
}

export const getAppointmentsArray = async(email:string)=>{
    const response = await fetch("api/getAppointments/get-my-offlineaAppointments",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({email}),
    });

    console.log(response);
    if(!response.ok){
        throw new Error("Error fetching offline-appointments");
        
    };

    const data = await response.json();
    console.log(data);
    return data;
}

export const getDoctor = async()=>{
    const url = "https://countries-cities.p.rapidapi.com/location/country/IND/city/list?page=2&per_page=20&population=1501";
   const options = {
    method:"GET",
    headers: {
		'X-RapidAPI-Key': import.meta.env.SEARCH_CITY_API_KEY as string,
		'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
	}
   }

   try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
    return result
} catch (error) {
	console.error(error);
}

};

export const addDoctor = async(formData:FormData)=>{
    console.log(formData);
    const response = await fetch("/api/doctor/add-doctor",{
        method:"POST",
        // headers:{
            // "Content-Type":"application/json"
        // },
        credentials:"include",
        body:formData,
    });


    if(!response.ok){
        throw new Error("Error registering doctor");
    };

    return await response.json();
}