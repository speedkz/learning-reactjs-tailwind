import AuthGuard from "guards/AuthGuard";

const Home = () => {
  return (
    <AuthGuard>
      <p>Home need to sign in</p>
    </AuthGuard>
  );
};

export default Home;
