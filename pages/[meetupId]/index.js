import Link from "next/link";
import MeetupDetail from "../../components/meetups/MeetupDetail";
//Every path on the browse have to be write by the name of the file without .js(except index cause is lways the default)
const MeetupDetailPage = () => {
    return (
        <MeetupDetail/>
    )
}

//We need this function cause weare going to generate static paiges so before we build it nextjs needs to know the exact number of pages related with the ids
//We use fallback to indicate if we gonna indicate all types of pages or some of them, with false if user enter some param not registered then nextjs shows 404, but if we put it to true, nextjs gonna made the page dynamically in that case
export async function getStaticPaths() {
    //We can stablish too a connection directly through a database to get all data Ids necessary create the different params for the prerender pages
    return {
        fallback: false,//we can put 'blocking' if we adda a new enter page but is not ready generated and we have to wait a little bit and seeit finished instead of a empty page untils is generated like when we put true
        paths: [
            {
                params: {
                    meetupId: 'a1'
                }
            },
            {
                params: {
                    meetupId: 'a2'
                }
            },
            {
                params: {
                    meetupId: 'a3'
                }
            },
        ]
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    //We can call from here to endpoint instead to the api backend folder, because the functions only be generated on server and dont be expose to thecode client
    //We can stablish too a connection directly through a database to get data for a specific element
    return {
        props: {
            data: {
                id: meetupId,
                title: 'aaa',
                address: 'Somewhere',
                description: 'So beautiful',
                img: 'https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/01/9c.jpg'
            }
        }
    }
}
export default MeetupDetailPage;