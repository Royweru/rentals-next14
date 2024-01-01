import React, { Children } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface ModalProps {
  isOpen: boolean;
  title?: String;
  desc?: string;
  onClose: () => void;
  children: React.ReactNode;
  action?: () => void;
  secondaryAction?: () => void;
  actionLabel?: string;
  secodaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  desc,
  onClose,
  children,
  action,
  secondaryAction,
  actionLabel,
  secodaryActionLabel,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-gray-200 p-5 w-full overflow-hidden">
        <DialogHeader className=" pt-4 ">
          <DialogTitle className=" font-bold font-sans text-xl">
            {title}
          </DialogTitle>
          <DialogDescription>{desc}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className=" w-full flex justify-end items-center gap-x-4">
          {actionLabel && (
            <Button onClick={action} variant="destructive">
              {actionLabel}
            </Button>
          )}

          <Button onClick={secondaryAction} variant="outline">
            {secodaryActionLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
