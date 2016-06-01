'use strict';
const _ = require('lodash');
const async = require('async');
const validator = require('validator');
const request = require('request');
const cheerio = require('cheerio');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.render('armory/index', {
    title: 'Armory'
  });
};
