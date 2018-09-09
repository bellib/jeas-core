const path = require('path') ; 
const responcer = require('./responce/respoce') ;
const requester = require('./request/request') ;

module.exports = (req, res) => responcer( res, requester(req)  ) ;