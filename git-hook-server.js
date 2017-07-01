var http = require('http');
var exec = require('exec');
var child_process = require('child_process');
var winston = require('winston');
var path = require('path');

var workspace = process.env.pm_cwd || __dirname;
