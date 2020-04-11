import Layout from "../components/Layout";

const defualt = ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry`}
  </Layout>
);

export default defualt;
