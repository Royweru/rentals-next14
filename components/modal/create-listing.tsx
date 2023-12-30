"use client";
import React, { useMemo, useState } from "react";
import * as z from "zod";

import useCreateListingModal from "@/hooks/use-create-listing";
import Modal from "./modal";
import { useForm } from "react-hook-form";
import { Map } from "../map";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { useKenya } from "@/hooks/use-countries";
import { CountrySelect } from "../inputs/country-select";

enum STEPS {
  LOCATION = 1,
  CATEGORY = 2,
  DETAILS = 3,
  PRICE = 4,
}
const formSchema = z.object({
  categoryId: z.string().min(1),
  locationValue: z.string().min(1),
  images: z.object({ url: z.string().min(1) }).array(),
  purchasePrice: z.coerce.number().min(1),
  rentalPrice: z.coerce.number().min(1),
  bathrooms: z.number().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const CreateListing = () => {
  const { getAll } = useKenya();
  const countries = getAll();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
      rentalPrice: 1,
      purchasePrice: 1,
      locationValue: "",
      bathrooms: 0,
      description: "",
      categoryId: "",
      images: [],
    },
  });
  const [step, setStep] = useState(STEPS.LOCATION);

  const onAdd = () => {
    setStep((val) => val + 1);
  };
  const onMinus = () => {
    setStep((val) => val - 1);
  };

  const { isOpen, onClose } = useCreateListingModal();

  let bodyContent;

  const actionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined;
    }
    return "BACK";
  }, [step]);
  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "CREATE";
    }
    return "NEXT";
  }, [step]);

  if (step === STEPS.LOCATION) {
    bodyContent = (
       <div className=" flex flex-col w-full">
         <Form {...form}>
          <form onSubmit={() => {}}>
            <FormField
              name="locationValue"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location:</FormLabel>
                  <FormControl>
                    <CountrySelect
                      onChange={field.onChange}
                     
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className=" mt-12">
        <Map />
        </div>
        
       </div>
        

        
     
    );
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create your own listing and manage it"
      desc="This is what it looks like this is what it looks like"
      action={onMinus}
      secondaryAction={onAdd}
      actionLabel={actionLabel}
      secodaryActionLabel={secondaryActionLabel}
    >
      <div className=" flex flex-col gap-y-3 w-full">
        {bodyContent}
        </div>
    </Modal>
  );
};

export default CreateListing;
