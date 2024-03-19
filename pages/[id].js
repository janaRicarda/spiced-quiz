import SpiceDetails from "@/Components/SpiceDetail/SpiceDetail";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/spices/${id}`);
  console.log(data);
  return (
    <>
      <SpiceDetails data={data} />
    </>
  );
}
