"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controllers/contact");
const router = express_1.default.Router();
/* GET /contact-list page. */
router.get('/list', contact_1.DisplayListPage);
/* GET - display /contact-list/add page. */
router.get('/add', contact_1.DisplayAddPage);
/* GET - display /contact-list/edit/:id page. */
router.get('/edit/:id', contact_1.DisplayEditPage);
/* POST - process /contact-list/add page */
router.post('/add', contact_1.ProcessAddPage);
/* POST - process /contact-list/edit/:id page */
router.post('/edit/:id', contact_1.ProcessEditPage);
/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', contact_1.ProcessDeletePage);
exports.default = router;
