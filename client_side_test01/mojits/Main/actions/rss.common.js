/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('RSS', function(Y, NAME) {
/**
 * The Main module.
 *
 * @module Main
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        rss: function (ac) {
            ac.done('foo','json');
        }

    };

}, '0.0.1', {requires: []});
