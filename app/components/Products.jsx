import Image from "next/image";
import React from "react";

const Products = () => {
  return (
    <div>
      <Image
        src="https://ik.imagekit.io/621qxpyrg/product5.jpg?updatedAt=1736290777385"
        sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={760}
        height={920}
        alt=""
        loading="lazy"
      />
      <Image
        src="https://ik.imagekit.io/621qxpyrg/product2.jpg?updatedAt=1736290776972"
        sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={760}
        height={920}
        alt=""
        loading="lazy"
      />
      <Image
        src="https://ik.imagekit.io/621qxpyrg/product1.jpg?updatedAt=1736290776535"
        sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={760}
        height={920}
        alt=""
        loading="lazy"
      />
      <Image
        src="https://ik.imagekit.io/621qxpyrg/product4.jpg?updatedAt=1736290776052"
        sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={760}
        height={920}
        alt=""
        loading="lazy"
      />
      <Image
        src="https://ik.imagekit.io/621qxpyrg/product3.jpg?updatedAt=1736290777752"
        sizes="max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={760}
        height={920}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default Products;
