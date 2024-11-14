import { useRouter, useSearchParams } from "next/navigation";

// Custom hook to manage URL query parameter for a given key
export const useQueryParam = (
  key: string,
  defaultValue: string | null = null
) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read the current value of the query parameter
  const paramValue = searchParams.get(key) ?? defaultValue;

  // Function to set the query parameter
  const setQueryParam = (value: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newParams.set(key, value); // Add or update the query parameter
    } else {
      newParams.delete(key); // Remove the query parameter
    }
    router.push(`?${newParams.toString()}`);
  };

  return [paramValue, setQueryParam] as const;
};
