import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useAppContext } from "../context/AppContext";
import { useForm } from "react-hook-form";
import { StripeCardElement } from "@stripe/stripe-js";
import { useMutation } from "react-query";
import * as apiClient from "../api-clients";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export type ConfirmPaymentData = {
  price: string;
  clientSecret: string;
  id: string;
};

const ConfirmPaymentForm = () => {
  const navigate = useNavigate();
  // const { stripePromise } = useAppContext();
  const { handleSubmit } = useForm<ConfirmPaymentData>();
  const stripe = useStripe();
  const elements = useElements();
  const { paymentIntentId, clientSecret, price } = useAppContext();

  const mutation = useMutation(apiClient.confirmPayment, {
    onSuccess: () => {
      toast.success("Payment Confirmed");
      console.log("Payment Confirmed");
      navigate("/appointmentsPage");
    },
    onError: () => {
      toast.error("Payment Failed");
      console.log("Payment Failed");
    },
  });

  const onSubmit = handleSubmit(async () => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
      },
    });

    if (result.paymentIntent?.status === "succeeded") {
      mutation.mutate({
        id: paymentIntentId,
        clientSecret: clientSecret,
        price: price,
      });
    }


  });
  return (
    // <Elements stripe={stripePromise}>
      <div className="flex flex-col border-2 border-gray-400 shadow-xl rounded z-10  px-12 bg-slate-100 my-auto">
        <div className="text-gray-600 text-2xl my-2">Confirm Payment</div>
        <hr></hr>
        <form className="flex flex-col items-start my-auto" onSubmit={onSubmit}>
          <div className="flex text-3xl my-4 font-semibold">
            Your Payment Summary
          </div>

          <div className="text-2xl my-2 font-semibold">
            Total Cost : ₹ 149/-
          </div>

          <div className="text-sm ">
            Inclusive of all taxes and gst charges.
          </div>

          <div className="py-4 w-full flex flex-col">
            <h1 className="text-2xl font-semibold mr-auto my-2">
              Card Details
            </h1>
            <CardElement
              id="payment-element"
              className="border rounded-md text-sm py-3 w-full"
            ></CardElement>
          </div>

          <button
            type="submit"
            className="text-xl text-white bg-blue-500 my-4 py-2 px-3 tracking-tight rounded hover:bg-blue-600"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    // </Elements>
  );
};

export default ConfirmPaymentForm;
