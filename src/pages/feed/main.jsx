import React from "react";
import Form from "../../components/form";
import Post from "../../components/post";

const Main = ({ user }) => {
  return (
    <main className="border border-fourth overflow-y-auto">
      <header className="border-b border-fourth p-4 font-bold ">Home</header>
      <Form user={user} />
      <Post />
      <Post />
    </main>
  );
};

export default Main;
