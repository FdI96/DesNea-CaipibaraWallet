import Layout from "../layout/layout";
import Body from "../body/body";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { fetchUsers } from "../users/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.marcosUsers);

  useEffect(() => {
    if (!users || !users.length) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);

  return (
    <Layout>
      <Body />
    </Layout>
  );
}
