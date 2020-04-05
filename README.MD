
[![npm version](http://img.shields.io/npm/v/nestjs-sentry.svg?style=flat)](https://npmjs.org/package/nestjs-sentry  "View this project on npm")

[![Codecov Coverage](https://img.shields.io/codecov/c/github/ntegral/nestjs-sentry/master.svg?style=flat-square)](https://codecov.io/gh/ntegral/nestjs-sentry)

[![ISC license](http://img.shields.io/badge/license-ISC-brightgreen.svg)](http://opensource.org/licenses/ISC)

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PM2PTQ6Z2XATQ&source=url)

  

<p align="center">

<h3 align="center">

nestjs-sentry

</h3>

  

<p align="center">

Provides an injectable sentry.io client to provide enterprise logging nestjs modules

</p>

</p>

  

## Table Of Contents

  

- [About](#about)

- [Installation](#installation)

- [Getting Started](#getting-started)

- [Contributing](#contributing)

- [License](#license)

- [Acknowledgements](#acknowledgements)

  

## About

  

`nestjs-sentry` implements a module, `SentryModule`, which when imported into

your nestjs project provides a Sentry.io client to any class that injects it. This

lets Sentry.io be worked into your dependency injection workflow without having to

do any extra work outside of the initial setup.

  

## Installation

  

```bash

npm install --save nestjs-sentry

```

  

## Getting Started

  

The simplest way to use `nestjs-sentry` is to use `SentryModule.forRoot`

  

```typescript

import { Module } from '@nestjs-common';

import { SentryModule } from 'nestjs-sentry';

  

@Module({

imports: [

SentryModule.forRoot({

dsn: 'sentry_io_dsn',

debug: true | false

environment: 'dev' | 'production' | 'some_environment',

release: 'some_release', | null, // must create a release in sentry.io dashboard

logLevel: LogLevel.Debug //based on sentry.io loglevel //

}),

],

})

export class AppModule {}

```

You can then use Sentry interceptor 
  
```typescript
import { Module } from  '@nestjs/common';
import { APP_INTERCEPTOR } from  '@nestjs/core';
import { SentryInterceptor, SentryModule } from  'nestjs-sentry';

@Module({

imports: [

SentryModule.forRoot({ dsn: Environment.get('API_SHOP_SENTRY_DSN') }),

],

controllers: [AppController],

providers: [

{

provide: APP_INTERCEPTOR,

useClass: SentryInterceptor,

},

],

})

export  class  AppModule {}
```

  

## Contributing

  

I would greatly appreciate any contributions to make this project better. Please

make sure to follow the below guidelines before getting your hands dirty.

  

1. Fork the repository

2. Create your branch (`git checkout -b my-branch`)

3. Commit any changes to your branch

4. Push your changes to your remote branch

5. Open a pull request

  

## License

  

Distributed under the ISC License. See `LICENSE` for more information.

  

## Acknowledgements

  

- [nestjs](https://nestjs.com)

- [@sentry/node](https://github.com/getsentry/sentry-javascript)

  

Copyright &copy; 2019 Adias Tech.