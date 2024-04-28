import { QueryClient } from "@tanstack/react-query";
import { StatusCode } from "status-code-enum";

const MAX_RETRIES = 2;
const STALE_TIME = 0; // = 5 * 60e3; // 5 mins

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      refetchOnWindowFocus: false,
      retry(failureCount: number, err: any) {
        return (
          failureCount < MAX_RETRIES &&
          err.response?.status !== StatusCode.ClientErrorNotFound
        );
      },
    },
  },
});
export default queryClient;
