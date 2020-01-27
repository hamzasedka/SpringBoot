
import * as fs from 'fs';
import { startUp, NestServerConfig, initializeFirebaseAdmin } from '@dom/services/common-service'
import * as functions from 'firebase-functions';
import { environment } from './environments/environment';
import { AuthModule } from '@dom/services/auth-service'
import { SubscriptionsModule } from '@dom/services/subscriptions-service'

// ----- Init Firebase -------------
console.log('Init Firebase');
initializeFirebaseAdmin(environment.firebase, environment.firebaseAdminConfig);

// ----- https -------------
const httpsOptions = {
  key: fs.readFileSync(`${process.cwd()}/ssl/server.key`),
  cert: fs.readFileSync(`${process.cwd()}/ssl/server.crt`),
};

// ----- Auth Service -------------
const authServiceConfig: NestServerConfig = {
  module: AuthModule,
  globalApiPrefix: 'v1',
  title: 'Auth Service',
  description: 'The User Account Service',
  version: '1.0',
  swaggerPath: '',
  devMode: !environment.production,
  port: 5000,
};

const authServer = startUp(authServiceConfig, httpsOptions);
export const authService = functions.https.onRequest(authServer);

// ----- Subscriptions Service -------------
const subscriptionsServiceConfig: NestServerConfig = {
  module: SubscriptionsModule,
  globalApiPrefix: 'v1',
  title: 'Subscriptions Service',
  description: 'The Subscriptions Service',
  version: '1.0',
  swaggerPath: '',
  devMode: !environment.production,
  port: 5001,
};

const subscriptionsServer = startUp(subscriptionsServiceConfig, httpsOptions);
export const subscriptionsService = functions.https.onRequest(subscriptionsServer);
