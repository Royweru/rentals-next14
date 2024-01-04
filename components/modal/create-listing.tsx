"use client";
import React, { useMemo, useState } from "react";
import * as z from "zod";

import useCreateListingModal from "@/hooks/use-create-listing";

import { useForm } from "react-hook-form";
import { Map } from "../map";
import { ImageUpload } from "../inputs/image-upload";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { useCountries } from "@/hooks/use-countries";
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
import { Category } from "@prisma/client";
import { Input } from "../ui/input";

interface CreateListingProps {
  categories?: Category[];
}

enum STEPS {
  LOCATION = 0,
  CATEGORY = 1,
  DETAILS = 2,
  IMAGES = 3,
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

const CreateListing: React.FC<CreateListingProps> = ({ categories }) => {
  const { getAll } = useCountries();
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (step !== STEPS.PRICE) {
      return onAdd;
    }
    console.log(values);
  };

  const isLoading = form.formState.isSubmitting;
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
            <Select
              disabled={isLoading}
              value={field.value}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder="select a Country"
                    defaultValue={field.value}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem value={country.value} key={country.value}>
                    {country.label}
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
      <FormField
        name="categoryId"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <Select>
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    defaultValue={field.value}
                    placeholder="choose a category"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {categories?.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                    className=" p-4"
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    );
  }
  if (step === STEPS.DETAILS) {
    title = "Give a little bit of more detais regarding you rental";
    desc = "";
    bodyContent = (
      <div className=" flex flex-col gap-y-4 w-full">
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heading you would like to give your place</FormLabel>
              <FormDescription>
                e.g PentHouse in GTC residentials..
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="title for your place"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>A short description of your place</FormLabel>
              <FormDescription>
                e.g Located few kilometers from the CBD best suited for urban
                stay
              </FormDescription>
              <FormControl>
                <Input
                  placeholder="description for your place"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="bathrooms"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of bathrooms</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="title for your place"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }
  if (step === STEPS.IMAGES) {
    title = "Images of your place";
    desc =
      "Upload a few photos to display to your customers, pictures must include each and every different room in your place";
    bodyContent = (
      <div className=" w-full flex flex-col items-center gap-y-3 h-full">
        <FormField
          name="images"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <ImageUpload
                  value={
                    Array.isArray(field.value)
                      ? field.value.map((image) => image.url)
                      : []
                  }
                  onChange={(url: any) =>
                    field.onChange([...(field.value || []), { url }])
                  }
                  onRemove={(url: any) =>
                    field.onChange([
                      ...(field.value || []).filter(
                        (current) => current.url !== url
                      ),
                    ])
                  }
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  }
  if (step === STEPS.PRICE) {
    title = "What's the price range for your rentals";
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
          {step === STEPS.PRICE && (
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
