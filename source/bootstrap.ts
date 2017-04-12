<reference patch="../node_modules/angular2/typings/browser.d.ts" />
import 'zone.js/dist/zone';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from "angular2/router";
import {LocationStrategy} from "angular2/src/platform/browser/location/location_strategy";
import {HashLocationStrategy} from "angular2/src/platform/browser/location/hash_location_strategy";

import {TodoApp} from './TodoApp';

bootstrap(TodoApp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
