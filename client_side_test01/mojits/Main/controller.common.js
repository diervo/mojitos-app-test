/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Main', function(Y, NAME) {

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

        init: function(config) {
            this.config = config;
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('MainModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                //ac.assets.addCss('./index.css');
                var mydata = {
                    status: 'Mojito is working.',
                    data: data
                };

                //mydata['shaker-inline'] = 'This is shaker inline text';

                ac.done(mydata);
            });
        },
        json: function (ac) {
            ac.done({foo:'foo'}, 'json');
        },
        other: function (ac) {
            ac.done({});
        },
         rss2: function (ac) {
            console.log('RSS2');
            ac.done('foo','json');
        }

    };

}, '0.0.1', {requires: ['mojito','mojito-assets-addon','shaker-inline-addon', 'mojito-models-addon', 'MainModelFoo']});
