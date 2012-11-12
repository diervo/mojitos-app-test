/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MainBinderIndex', function(Y, NAME) {

/**
 * The MainBinderIndex module.
 *
 * @module MainBinderIndex
 */

    /**
     * Constructor for the MainBinderIndex class.
     *
     * @class MainBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            window.YY = Y;
            var me = this;
            this.node = node;
            Y.one('.json').on('click', function (e) {
                console.log('JSON!');
                e.preventDefault();
                this.mojitProxy.invoke('json', function (err, data, meta){
                    console.log(arguments);
                });
            }, this);

            Y.one('.other').on('click', function (e) {
                console.log('Oter');
                e.preventDefault();
                this.mojitProxy.invoke('other', function (err, data, meta){
                    console.log(arguments);
                });
            },this);


        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client', 'poc-view']});
