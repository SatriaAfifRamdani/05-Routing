import Link from "next/link";

export default function Home() {
    return (
          <div>
            <h1>Welcome to Home</h1>
            <Link href='/Profile'>Profile</Link><br></br>
            <Link href='/about'>About</Link>
          </div>
    );
}