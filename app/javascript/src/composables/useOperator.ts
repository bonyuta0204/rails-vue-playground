import { User } from "@/types/user";
import useSWRV from "swrv";
import Gateway from "@/lib/gateway";

export function useOperator() {
  const gateway = new Gateway();
  const { data: operator, mutate: mutateOperator } = useSWRV<User>(
    "/ajax/operator",
    gateway.get,
    {
      dedupingInterval: 0,
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  );

  return { operator, mutateOperator };
}
