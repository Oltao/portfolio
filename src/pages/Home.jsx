import React from "react";

import { homeContents } from "../text/TextContent";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <Layout
      heading={homeContents.heading}
      span={homeContents.devName}
      details={homeContents.aboutDev}
      btnTitle="View Resume"
    >
      <UserCard>OT</UserCard>
    </Layout>
  );
};

export default Home;
