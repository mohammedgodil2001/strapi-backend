'use strict';

/**
 * perfumer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::perfumer.perfumer');
