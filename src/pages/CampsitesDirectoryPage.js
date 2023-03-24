import { Container } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";


const CampsitesDirectoryPage = () => {

    return (
        <Container>
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