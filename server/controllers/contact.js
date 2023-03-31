"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayListPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const utils_1 = require("../views/utils");
//(R)ead in CRUD
function DisplayListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // console.log(contactCollection);
        res.render('index', { title: 'Contact list', page: 'contact/contact-list', contact: contactCollection, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayListPage = DisplayListPage;
// Display (E)dit page
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(contactItemToEdit);
        res.render('index', { title: "Contact Edit", page: "contact/contact-edit", item: contactItemToEdit, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
// Display (C)reate page
function DisplayAddPage(req, res, next) {
    // show the edit view
    res.render('index', { title: 'Add Contact', page: 'contact/contact-edit', item: '', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
// Process (E)dit page
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedItem = new contact_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    contact_1.default.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
// Process (C)reate page
function ProcessAddPage(req, res, next) {
    let newItem = new contact_1.default({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    contact_1.default.create(newItem, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('/contact/list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
// Process (D)elete page
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
