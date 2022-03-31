import React from "react";
import { useSelector } from "react-redux";

export const RequestAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return <span>por {author ? author.name : "Unknown author"}</span>;
};
