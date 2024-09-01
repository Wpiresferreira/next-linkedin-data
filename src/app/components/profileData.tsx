export default async function ProfileData(props: any) {
  const url =
    "https://linkedin-api8.p.rapidapi.com/?username=" + props.username;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6fa6d44963mshcf6eb887528eb62p1186f7jsn2b7638536b64",
      "x-rapidapi-host": "linkedin-api8.p.rapidapi.com",
    },
  };
  let result;
  try {
    const response = await fetch(url, options);
    result = await JSON.parse(await response.text());
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  if (!result.fullPositions.map) return <p>Empty</p>;
  return (
    <>
      <div className="flex flex-col bg-slate-400 rounded-2xl border-solid p-3 w-fit m-3 max-w-[300px]">
        <h1 className="text-center font-bold">
          {result.firstName} {result.lastName}
        </h1>

        {result.fullPositions.map((position: any) => (
          <h1>
            {position.companyName} - {position.title}
          </h1>
        ))}
      </div>
    </>
  );
}
