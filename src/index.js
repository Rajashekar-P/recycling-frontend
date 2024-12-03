import Head from "next/head";
import Image from "next/image";

export async function getUsers() {
  const res = await fetch("http://localhost:8000/api/users");
  const getAllUsers = await res.json();

  return {
    props: {
      getAllUsers,
    },
    revalidate: 30,
  };
}
