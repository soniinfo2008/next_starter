import { useQuery } from "@tanstack/react-query";

import { CouponAPI } from "./query-slice";

export function useGetCoupons() {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: () => {
      return CouponAPI.getAllCoupons();
    },
  });
}
