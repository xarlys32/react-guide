import Link from "next/link";
//Every path on the browse have to be write by the name of the file without .js(except index cause is lways the default)
const HomePage = () => {
   return (
   <>
    <h3>Home page</h3>
        <ul>
            <li>
                <Link href='news/example-new'>News!</Link>
            </li>
        </ul>
   </>
)}
export default HomePage;