import Image from "next/image";

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  phone: number;
};

type dataType = {
  users: UserType[];
};

export default async function About() {
  const res = await fetch("https://dummyjson.com/users");
  const data: dataType = await res.json();
  console.log(data.users);

  return (
    <div className="max-w-3xl py-4 px-6">
      <div>
        <div className="mx-auto">
          <h1 className="text-2xl font-semibold text-center">UserLists</h1>
        </div>
        {data.users.map((user) => {
          return (
            <div
              key={user.id}
              className="mt-2 flex gap-2 items-center w-max mx-auto"
            >
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-xl font-bold">{user.id}</h1>
                <Image src={user.image} alt={user.id} width={25} height={25} />
              </div>
              <ul>
                <div className="flex gap-4">
                  <li>{user.firstName}</li>
                  <h3>{user.lastName}</h3>
                  <h3>Age: {user.age}</h3>
                </div>

                <div className="flex flex-col">
                  <p className="leading-relaxed">Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
