import { User } from "@/types/user";
import useSWRV from "swrv";
import Gateway from "@/lib/gateway";

export function useOperator() {
  const gateway = new Gateway();
  const { data: operator } = useSWRV<User>("/ajax/operator", gateway.get);

  return { operator };
}
