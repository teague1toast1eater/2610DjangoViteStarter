import { useParams } from "react-router-dom";

export function Profile() {
    const parms = useParams();
    console.log(parms);

    return (
        <div className="profile">
            <h1>Your Profile</h1>
            <p>Manage your account settings and preferences.</p>
        </div>
    );
}