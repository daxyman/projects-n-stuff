import "./MainSection.css";
import "../assets/recipees";
import ProfileSection from "./ProfileSection";

function MainSection(props) {

    return (
      <>
      <ProfileSection
        source={props.source}
        userName={props.userName}
        alt={props.alt}
        profilBio={props.profilBio}
        posts={props.posts}
        followers={props.followers}
        following={props.following}
        />
      </>
    )
  }
  
  export default MainSection