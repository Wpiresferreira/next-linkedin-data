import Image from "next/image";
import { useState } from "react";
import ProfileData from "./components/profileData";

export default async function Home() {
  let usernames = ["rodjpf",
    "wagnerpferreira",
    "marcelo-botelho-51868234",
    "melina-souza-84332a95",
    "patriciacvcosta"


  ];

  
  return <main>
    {usernames.map(username => (
      <ProfileData username={username}></ProfileData>
    )
    )}

    </main>;
}
