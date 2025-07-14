import Layout from '../components/Layout';
import ApiProducts from '../components/ApiProducts';

function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Welcome to MyReactShop!</h2>
      <ApiProducts />
    </Layout>
  );
}

export default Home;



