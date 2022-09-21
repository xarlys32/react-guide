import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
//Every path on the browse have to be write by the name of the file without .js(except index cause is lways the default)
const DUMMY_MEETUP = [
    {
        id: 'a1',
        title: 'First meetup',
        image : 'https://fishinginireland.info/wp-content/uploads/2021/11/rock-of-cashel.jpg',
        address: 'Ireland',
        description: 'boooriing'
    },
    {
        id: 'a2',
        title: 'Second meetup',
        image : 'https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/01/9c.jpg',
        address: 'Ireland',
        description: 'boooriing'
    },
    {
        id: 'a3',
        title: 'Third meetup',
        image : 'https://images.unsplash.com/photo-1589489873423-d1745278a8f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        address: 'Scotland',
        description: 'boooriing'
    }
];
const HomePage = (props) => {
    //We have to add Head import if we want to be searched by search engines like Google
    //Head have to be imported in all pages, not only in one
    return (
   <>   
        <Head>
            <title>NextJs Meetups</title>
            <meta name='description' content='Huge list of NextJs meetups'/>
        </Head>
        <MeetupList meetups={props.meetup}/>
   </>
)}

//This way allows to bring data for static pages and will be executed only when the pages is build
//We can use context like a property
export async function getStaticProps() {
    return {
        props: {
            meetup: DUMMY_MEETUP
        },
        revalidate: 10 //This allows to regenerate the page when are deploy on a server on each 10 seconds
    }
}

//This is use on cases the page is gonna change dependending of the results of the server response. 
/*export async function gerServerSideProps(context) {
    const req = context.req;
    const res = context.res;
    
    return {
        props: {
            meetup: DUMMY_MEETUP
        },
    }
}*/
export default HomePage;