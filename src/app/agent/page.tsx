import AgentsService from "./service";

export default async function Page() {
  const { data: me } = await AgentsService.getMyAgent();

  return (
    <div>
      {JSON.stringify(me, null, 2)}
    </div>
  );
}
