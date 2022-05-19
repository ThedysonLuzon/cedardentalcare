"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get('/', controllers_1.DisplayHomePage);
router.get('/about', controllers_1.DisplayAboutPage);
router.get('/team', controllers_1.DisplayTeamPage);
router.get('/services', controllers_1.DisplayServicesPage);
router.get('/generaldentistry', controllers_1.DisplayGeneralDentistryPage);
router.get('/orthodontics', controllers_1.DisplayOrthodonticsPage);
router.get('/dentalimplants', controllers_1.DisplayDentalImplantsPage);
router.get('/pediatricdentistry', controllers_1.DisplayPediatricDentistryPage);
router.get('/digitalxrays', controllers_1.DisplayDigitalXRaysPage);
router.get('/oralsurgery', controllers_1.DisplayOralSurgeryPage);
router.get('/cosmeticdentistry', controllers_1.DisplayCosmeticDentistryPage);
router.get('/teethwhitening', controllers_1.DisplayTeethWhiteningPage);
router.get('/denturerepair', controllers_1.DisplayDentureRepairPage);
router.get('/contact', controllers_1.DisplayContactPage);
exports.default = router;
//# sourceMappingURL=index.js.map