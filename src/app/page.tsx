import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";

export const getData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    image,
    title,
    description,
    category -> {
      name
    }
  }`);
  return res;
};

interface IProduct {
  title: string,
  _id: string,
  description: string,
  image: IImage,
  price: number,
  category: {
    name: string
  }
}

export default async function Home() {
  const data: IProduct[] = await getData()
  return (
    <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">
    
      {data.map((item) => (
        <div>
          <Image
            width={300}
            height={300}
            className="max-h-[200px] object-cover object-top"
            src={urlForImage(item.image).url()} alt="product" />
          <h2>{item.title}</h2>
          <h2>${item.price}</h2>
          <button className="border py-2 px-6 rounded bg-blue-600 text-white">Add to Cart</button>
        </div>
      ))}
    </div>
  )

}