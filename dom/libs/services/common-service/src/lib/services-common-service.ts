import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as https from 'https';
import * as admin from 'firebase-admin';
import { SecureContextOptions } from 'tls';

export interface NestServerConfig {
  module: any;
  globalApiPrefix: string;
  title: string;
  description: string;
  version: string;
  swaggerPath: string;
  devMode?: boolean;
  port: number;
}

async function createNestServer(config: NestServerConfig, expressInstance: any) {
  const { module, globalApiPrefix, title, description, version, swaggerPath } = config;

  const app = await NestFactory.create(
    module,
    new ExpressAdapter(expressInstance)
  );
  app.use(helmet());
  app.enableCors({ preflightContinue: false });
  app.setGlobalPrefix(globalApiPrefix);

  // setup swagger
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(swaggerPath, app, document);

  return app.init();
}

export function initializeFirebaseAdmin(firebaseConfig, firebaseAdminConfig) {
  const serviceAccount = firebaseAdminConfig;
  /*
    The default Firebase app already exists. This means you called initializeApp() more than once without providing an app name as the second argument.
    In most cases you only need to call initializeApp() once.
    But if you do want to initialize multiple apps, pass a second argument to initializeApp() to give each app a unique name. */
  admin.initializeApp({
    ...firebaseConfig,
    credential: admin.credential.cert({
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key,
      projectId: serviceAccount.project_id
    })
  });
}


export function startUp(config: NestServerConfig, httpsOptions: SecureContextOptions): any {
  const server = express();
  createNestServer(config, server)
    .then(v => console.log('Nest is Ready'))
    .catch(err => console.error('Nest is broken', err));

  if (config.devMode && !!httpsOptions) {
    if (!config.port) {
      config.port = 5000;
    }
    https.createServer(httpsOptions, server).listen(config.port,
      () => {
        // tslint:disable-next-line:no-console
        console.info(`App listening on port ${config.port}! Go to https://localhost:${config.port}/`);
      });
  }
  return server;
}
