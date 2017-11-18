const express = require('express');
const router = express.Router();

const contactService = require('./contact.service');
const contactAPI = '/contacts';

router.get(contactAPI, (req, res) => {
  contactService.getAll(req, res);
});

router.post(contactAPI, (req, res) => {
  contactService.post(req, res);
});

router.put(`${contactAPI}/:id`, (req, res) => {
  contactService.put(req, res);
});

router.delete(`${contactAPI}/:id`, (req, res) => {
  contactService.remove(req, res);
});

module.exports = router;
