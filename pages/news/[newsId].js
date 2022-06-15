import { useRouter } from "next/router";

//If we put '[]' in the name of the file we are telling to nextjs that this is a dynamic page and should be loafde for different values in the path
const DetailPage = () => {
    const router = useRouter();
    const param = router.query.newsId;
    return (
        <>
            <h3>Detail page</h3>
            <p>{param}</p>
        </>
)}
export default DetailPage;