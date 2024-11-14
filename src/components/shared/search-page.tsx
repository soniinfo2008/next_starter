"use client";

import React, { useState } from "react";

import useSearch from "@/hooks/use-search";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { results, loading } = useSearch(query); // Using the custom hook for business logic

  return (
    <div>
      <label>Debouncing:</label>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id} className="odd:bg-muted">
              <div className="border-line border-b p-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row space-x-4">
                    {/* <div className="relative w-1/4">
                      <div
                        className="overflow-hidden rounded-md"
                        style={{
                          position: "relative",
                          paddingBottom: "100%",
                          height: 0,
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/352700/352751.10.jpg"
                          alt="Henry Nicholls faces ball-tampering charges"
                          className="hover:scale-110 hover:transition-transform hover:duration-500 hover:ease-in-out"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div> */}
                    {/* <div className="w-3/4"> */}
                    <div>
                      <div className="flex flex-col">
                        <h2 className="text-sm font-medium">{result.title}</h2>
                        <p className="mt-1 text-xs">{result.body}</p>

                        <div className="mt-1 leading-[0]">
                          <span className="text-xs">
                            <span>10-Nov-2023</span>
                          </span>
                          <span className="mx-2 text-xs">
                            <span>•</span>
                          </span>
                          <span className="text-xs">
                            <span>AAP</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
