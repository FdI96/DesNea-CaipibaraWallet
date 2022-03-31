import React from "react";
import { useSelector } from "react-redux";

export const RequestAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.marcosUsers.find((user) => user.id === userId)
  );

  return <span>por {author ? author.name : "Unknown author"}</span>;
};
