"use client";
import { useSubscribeMutation } from "@/src/redux/features/user";
import { TErrorResponse } from "@/src/types";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";

const Subscribe = ({ title }: { title: string }) => {
  const [makePayment] = useSubscribeMutation();

  const handleSubscribe = async () => {
    const toastId = toast.loading("Payment process is starting");
    const data = {
      amount: 20,
    };

    try {
      const res = await makePayment(data).unwrap();
      if (res?.message === "Booking successful" && res.data?.payment_url) {
        window.location.href = res.data.payment_url;
      } else {
        toast.error("Payment URL not found", { id: toastId });
      }
    } catch (error) {
      console.error(error);
      const err = error as TErrorResponse;
      toast.error(
        err.data?.errorMessages[0]?.message || "Something went wrong",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <div>
      <Button onClick={handleSubscribe}>{title}</Button>
    </div>
  );
};

export default Subscribe;
