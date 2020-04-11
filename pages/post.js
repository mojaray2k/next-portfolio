import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores neque
      corporis maiores odit veniam nemo assumenda natus. Rem ipsum quod tempore
      laudantium qui rerum. Quibusdam rerum fuga eligendi temporibus a.
    </p>
  </Layout>
);

export default withRouter(Post);
