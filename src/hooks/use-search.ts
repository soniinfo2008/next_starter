import { useEffect, useState } from "react";

import axios from "axios";

import useDebounce from "@/hooks/use-debounce";

// Define types for the post results
interface Post {
  id: number;
  title: string;
  body: string;
}

const useSearch = (query: string) => {
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Use the custom useDebounce hook
  const debouncedQuery = useDebounce(query, 500); // Debounce with 500ms delay

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery) {
        setResults([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get<Post[]>(
          `https://jsonplaceholder.typicode.com/posts?title_like=${debouncedQuery}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (debouncedQuery) {
      fetchData();
    }
  }, [debouncedQuery]);

  return { results, loading };
};

export default useSearch;
