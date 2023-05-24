import ContractsTable from "./components/ContractsTable";
import ContractsService from "./service";

export default async function Page() {
  const { data: { data: contracts } } = await ContractsService.getContracts();

  return <ContractsTable contracts={contracts} />;
}
