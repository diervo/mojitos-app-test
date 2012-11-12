/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Client', function(Y, NAME) {

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
            ac.models.get('ClientModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        json: function (ac) {
            ac.done({foo:'foo'}, 'json');
        },
        other: function (ac) {
            ac.done({});
        }

    };

}, '0.0.1', {requires: ['mojito','mojito-assets-addon', 'mojito-models-addon', 'ClientModelFoo']});
