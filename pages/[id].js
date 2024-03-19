import SpiceDetails from "@/Components/SpiceDetail/SpiceDetail";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: detail, isLoading } = useSWR(`/api/spices/${id}`);
  console.log(detail);
  return (
    <>
      <SpiceDetails detail={detail} />
    </>
  );
}
