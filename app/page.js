import Link from 'next/link';

const HomePage = () => {
  // console.log('server component');
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent uppercase">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
