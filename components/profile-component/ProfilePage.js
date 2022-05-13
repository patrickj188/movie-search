import ProfileTabs from "./ProfileTabs"
import { useSession } from "next-auth/react"



const ProfilePage = (props) => {
    const { data: session, status } = useSession()
    return (
        <div>
        </div>
    )
}

export default ProfilePage;