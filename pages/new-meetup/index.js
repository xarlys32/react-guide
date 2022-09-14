import Link from "next/link";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
//Every path on the browse have to be write by the name of the file without .js(except index cause is lways the default)
const NewMeetupPage = () => {
    const onAddMeetupHandler = () => {

    }
   return (
   <>
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
   </>
)}
export default NewMeetupPage;