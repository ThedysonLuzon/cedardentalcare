import express from 'express';
import { DisplayAboutPage, DisplayContactPage, DisplayCosmeticDentistryPage, DisplayDentalImplantsPage, DisplayDentureRepairPage, DisplayDigitalXRaysPage, DisplayGeneralDentistryPage, DisplayHomePage, DisplayOralSurgeryPage, DisplayOrthodonticsPage, DisplayPediatricDentistryPage, DisplayServicesPage, DisplayTeamPage, DisplayTeethWhiteningPage } from '../controllers';
const router = express.Router();

/* GET home page. */
router.get('/', DisplayHomePage);

router.get('/about', DisplayAboutPage);

router.get('/team', DisplayTeamPage);

router.get('/services', DisplayServicesPage);

router.get('/generaldentistry', DisplayGeneralDentistryPage);

router.get('/orthodontics', DisplayOrthodonticsPage);

router.get('/dentalimplants', DisplayDentalImplantsPage);

router.get('/pediatricdentistry', DisplayPediatricDentistryPage);

router.get('/digitalxrays', DisplayDigitalXRaysPage);

router.get('/oralsurgery', DisplayOralSurgeryPage);

router.get('/cosmeticdentistry', DisplayCosmeticDentistryPage);

router.get('/teethwhitening', DisplayTeethWhiteningPage);

router.get('/denturerepair', DisplayDentureRepairPage);

router.get('/contact', DisplayContactPage);

export default router;