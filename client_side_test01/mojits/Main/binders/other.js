/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('MainBinderOther', function(Y, NAME) {

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
          console.log('================== OTHER ==');
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
