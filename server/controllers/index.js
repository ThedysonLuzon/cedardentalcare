"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayEndodonticsPage = exports.DisplayDentureRepairPage = exports.DisplayTeethWhiteningPage = exports.DisplayCosmeticDentistryPage = exports.DisplayOralSurgeryPage = exports.DisplayDigitalXRaysPage = exports.DisplayPediatricDentistryPage = exports.DisplayGeneralDentistryPage = exports.DisplayDentalImplantsPage = exports.DisplayOrthodonticsPage = exports.DisplayServicesPage = exports.DisplayTeamPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const utils_1 = require("../views/utils");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayTeamPage(req, res, next) {
    res.render('index', { title: 'Team', page: 'team', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayTeamPage = DisplayTeamPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayOrthodonticsPage(req, res, next) {
    res.render('index', { title: 'Orthodontics', page: 'orthodontics', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayOrthodonticsPage = DisplayOrthodonticsPage;
function DisplayDentalImplantsPage(req, res, next) {
    res.render('index', { title: 'Dental Implants', page: 'dentalimplants', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayDentalImplantsPage = DisplayDentalImplantsPage;
function DisplayGeneralDentistryPage(req, res, next) {
    res.render('index', { title: 'General Dentistry', page: 'generaldentistry', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayGeneralDentistryPage = DisplayGeneralDentistryPage;
function DisplayPediatricDentistryPage(req, res, next) {
    res.render('index', { title: 'Pediatric Dentistry', page: 'pediatricdentistry', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayPediatricDentistryPage = DisplayPediatricDentistryPage;
function DisplayDigitalXRaysPage(req, res, next) {
    res.render('index', { title: 'Digital X-Rays', page: 'digitalxrays', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayDigitalXRaysPage = DisplayDigitalXRaysPage;
function DisplayOralSurgeryPage(req, res, next) {
    res.render('index', { title: 'Oral Surgery', page: 'oralsurgery', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayOralSurgeryPage = DisplayOralSurgeryPage;
function DisplayCosmeticDentistryPage(req, res, next) {
    res.render('index', { title: 'Cosmetic Dentistry', page: 'cosmeticdentistry', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayCosmeticDentistryPage = DisplayCosmeticDentistryPage;
function DisplayTeethWhiteningPage(req, res, next) {
    res.render('index', { title: 'Teeth Whitening', page: 'teethwhitening', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayTeethWhiteningPage = DisplayTeethWhiteningPage;
function DisplayDentureRepairPage(req, res, next) {
    res.render('index', { title: 'Denture Repair', page: 'denturerepair', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayDentureRepairPage = DisplayDentureRepairPage;
function DisplayEndodonticsPage(req, res, next) {
    res.render('index', { title: 'Endodontics', page: 'endodontics', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayEndodonticsPage = DisplayEndodonticsPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map