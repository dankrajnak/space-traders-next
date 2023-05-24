import FactionsService from "./service";

export default async function Factions() {
  const result = await FactionsService.getFactions();

  return (
    <pre>
      {JSON.stringify(result.data, null, 2)}
    </pre>
  );
}
