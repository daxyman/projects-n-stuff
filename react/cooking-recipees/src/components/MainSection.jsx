import "./MainSection.css";
import AjouterRecette from "./AjouterRecette";
import ProfileSection from "./ProfileSection";
import Recettes from "./Recettes";
function MainSection(props) {
  return (
    <main>
      <ProfileSection />
      <AjouterRecette />
      <Recettes />
    </main>
  );
}

export default MainSection;
