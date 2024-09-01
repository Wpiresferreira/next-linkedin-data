import ProfileData from "./components/profileData";

export default async function Home() {
  let usernames = [
    "rodjpf",
    "wagnerpferreira",
    "marcelo-botelho-51868234",
    "melina-souza-84332a95",
    "patriciacvcosta",
  ];

  if (usernames) {
    return (
      <main>
        {usernames.map((usern) => (
          <ProfileData username={usern}></ProfileData>
        ))}
      </main>
    );
  }
  return <p>Empty</p>
}
