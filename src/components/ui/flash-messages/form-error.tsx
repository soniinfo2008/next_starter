import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { FlashMessageProps } from "@/types";

const FormError = ({ message }: FlashMessageProps) => {
  if (!message) return null;
  return (
    <div className="flex w-full items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" /> <p>{message}</p>
    </div>
  );
};
export default FormError;
