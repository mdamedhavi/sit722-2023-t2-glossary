var express = require('express');
var router = express.Router();
const devOpsGlossaryService = require('../services/devOpsGlossaryService');

/* GET home page. */
router.get('/', function(req, res, next) {
  const tableRows = devOpsGlossaryService.getAllTableRows();
  res.render('index', { title: 'SIT722 DevOps Glossary', tableRows });
});

module.exports = router;
