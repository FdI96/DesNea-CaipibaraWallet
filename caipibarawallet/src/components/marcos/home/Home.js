import Layout from "../layout/layout";
import Body from "../body/body";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { fetchUsers } from "../users/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || !users.lenght) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);

  return (
    <Layout>
      <Body />
    </Layout>
  );
}
