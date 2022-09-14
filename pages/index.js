import MeetupList from "../components/meetups/MeetupList";
//Every path on the browse have to be write by the name of the file without .js(except index cause is lways the default)
const HomePage = () => {
    let DUMMY_MEETUP = [
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
    ]
   return (
   <>
    <MeetupList meetups={DUMMY_MEETUP}/>
   </>
)}
export default HomePage;