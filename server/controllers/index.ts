import express from 'express';
import { UserDisplayName } from '../views/utils';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'About', page: 'about', displayName: UserDisplayName(req) });
}

export function DisplayTeamPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Team', page: 'team', displayName: UserDisplayName(req) });
}
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Services', page: 'services', displayName: UserDisplayName(req) });
}

export function DisplayOrthodonticsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Orthodontics', page: 'orthodontics', displayName: UserDisplayName(req) });
}

export function DisplayDentalImplantsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Dental Implants', page: 'dentalimplants', displayName: UserDisplayName(req) });
}

export function DisplayGeneralDentistryPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'General Dentistry', page: 'generaldentistry', displayName: UserDisplayName(req) });
}

export function DisplayPediatricDentistryPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Pediatric Dentistry', page: 'pediatricdentistry', displayName: UserDisplayName(req) });
}

export function DisplayDigitalXRaysPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Digital X-Rays', page: 'digitalxrays', displayName: UserDisplayName(req) });
}

export function DisplayOralSurgeryPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Oral Surgery', page: 'oralsurgery', displayName: UserDisplayName(req) });
}

export function DisplayCosmeticDentistryPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Cosmetic Dentistry', page: 'cosmeticdentistry', displayName: UserDisplayName(req) });
}

export function DisplayTeethWhiteningPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Teeth Whitening', page: 'teethwhitening', displayName: UserDisplayName(req) });
}

export function DisplayDentureRepairPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Denture Repair', page: 'denturerepair', displayName: UserDisplayName(req) });
}

export function DisplayEndodonticsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Endodontics', page: 'endodontics', displayName: UserDisplayName(req) });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render('index', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) });
}