"use client";
import React, { useMemo, useState } from "react";
import * as z from "zod";

import useCreateListingModal from "@/hooks/use-create-listing";
import Modal from "./modal";
import { useForm } from "react-hook-form";
import { Map } from "../map";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { useKenya } from "@/hooks/use-countries";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

enum STEPS {
  LOCATION = 0,
  CATEGORY = 1,
  DETAILS = 2,
  PRICE = 3,
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

  const onSubmit = (values:z.infer<typeof formSchema>)=>{
     if(step!==STEPS.PRICE){
      return onAdd
     }
      console.log(values)
  }
  let bodyContent;
  let title;
  let desc;

  title = "Welcome to the first step of creating a listing ";
  desc = "Please choose a location";
  bodyContent = (
    <div className=" flex flex-col w-full">
      <FormField
        name="locationValue"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Select>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="select a region" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem value={country.value} key={country.value}>
                    {country.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <div className=" mt-12">
        <Map />
      </div>
    </div>
  );

  if (step === STEPS.CATEGORY) {
    title =
      "Please select the caategory in which your rentals or house belongs";
    desc = "";
    bodyContent = (
      <div className=" flex flex-col gap-y-4 w-full">
        <div>1 bedroom</div>
        <div>2 bedroom</div>
        <div>3 bedroom</div>
      </div>
    );
  }
  if (step === STEPS.DETAILS) {
    title = "Give a little bit of more detais regarding you rental";
    desc = "";
    bodyContent = (
      <div className=" flex flex-col gap-y-4 w-full">more details</div>
    );
  }
  if (step === STEPS.PRICE) {
    title = "What's the price range for your rental";
    desc = "";
    bodyContent = (
      <div className=" w-full flex flex-col gap-y-3 h-full">
        <div>one</div>
        <div>two</div>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" p-5 bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            {bodyContent}
            </form>
        </Form>

        <DialogFooter className=" w-full justify-end items-center">
          {actionLabel && (
            <Button onClick={onMinus} variant="destructive">
              {actionLabel}
            </Button>
          )}
          <Button onClick={onAdd} variant="secondary">
            {secondaryActionLabel}
          </Button>
          {step===STEPS.PRICE&&(
            <Button type="submit" variant="ghost">
             SUBMIT
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateListing;
