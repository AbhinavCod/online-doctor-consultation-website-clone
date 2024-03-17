
import { Elements } from "@stripe/react-stripe-js";
import image from "../../public/images/160953-OV57AL-315.jpg";
import ConfirmPaymentForm from "../components/ConfirmPaymentForm";
import { useAppContext } from "../context/AppContext";

const ConfirmPaymentPage = () => {
  const {stripePromise} = useAppContext();

  return (
    <>
    <div className="grid md:grid-cols-[2fr_2fr] gap-4">
      <div className="p-4">
        <img className="" src={image}></img>
      </div>

      <div className="flex flex-col">
        <Elements stripe={stripePromise}>
        <ConfirmPaymentForm />

        </Elements>
      </div>

    </div>

   
    
    </>
  )
}

export default ConfirmPaymentPage;