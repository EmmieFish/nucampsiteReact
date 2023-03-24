import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import SubHeader from "../components/SubHeader";


const CampsitesDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Directory' />
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;


//bad code i dont want to delete
// let selectedCampsite = selectRandomCampsite();

// const toggleCampsite = () => {
//     selectedCampsite = selectRandomCampsite();
//     console.log(selectedCampsite);
// };