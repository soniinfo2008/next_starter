import { useGetCoupons } from "./query";

export default function CouponList() {
  const { data, isError, isLoading } = useGetCoupons();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <h1>Error Occured</h1>;
  }

  const users = data?.payload.users;

  return (
    <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users?.map((user) => <div {...user} key={user.id} />)}
    </div>
  );
}
