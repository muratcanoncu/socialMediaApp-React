import { useContext } from "react";
import UserContext from "../../ContextFolder/ContextProvider";
import { Link } from "react-router-dom";
function UserProfile() {
  const context = useContext(UserContext);
  return (
    <div id="userProfile">
      <div className="text-center">
        <h2>USERNAME</h2>
        <h3>{context.mainState.activeUser.userName}</h3>
      </div>

      <div className="d-flex justify-content-between align-items-center w-100 px-5">
        <h4>Follower: {context.mainState.activeUser.follower}</h4>
        <h4>Following: {context.mainState.activeUser.following}</h4>
      </div>
      <p>Posts {context.mainState.activeUser.posts.length}</p>
      <Link to="/">
        <button>Timeline</button>
      </Link>
    </div>
  );
}

export default UserProfile;