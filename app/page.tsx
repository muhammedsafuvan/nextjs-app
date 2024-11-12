// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'

// export default function Home() {
//   return (
//     <main>
//       <h1>Hello World!</h1>
      
//       <a href="/users">Users</a>
//       <Link href="/users" > link-user</Link>
//       <ProductCard />

//     </main>
//   )
// }

import { sql } from "@vercel/postgres";

export default async function Cart() {
  const { rows } = await sql`SELECT * from PETS where name=${'raju'}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.name}>
          {row.name} - {row.owner}
        </div>
      ))}
    </div>
  );
}