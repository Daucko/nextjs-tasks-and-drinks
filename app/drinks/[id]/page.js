import Image from 'next/image';
import Link from 'next/link';
import drinkImg from './drink.jpg';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch a drink...');
  }
  return res.json();
};

const SingleDrinkPage = async (context) => {
  const params = await context.params; // Await the params if required by Next.js
  const id = params.id;

  const data = await getSingleDrink(id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <div>
        <Link href="/drinks" className="btn btn-primary mt-8 mb-12 uppercase">
          back to drinks
        </Link>
        <Image
          src={imgSrc}
          width={300}
          height={300}
          className="size-48 rounded-lg shadow-lg mb-4"
          priority
          alt={title}
        />
        {/* <img src={drinkImg.src} alt="Test Image" /> */}
        {/* <Image src={drinkImg} className="size-48 rounded" alt="drink" /> */}
        <h1 className="text-4xl mb-8">{title}</h1>
      </div>
    </div>
  );
};
export default SingleDrinkPage;
