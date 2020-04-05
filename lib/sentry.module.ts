import { DynamicModule, Module } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { SentryConfig } from './config/sentry-config';

@Module({
  imports: [],
  providers: [],
})
export class SentryModule {
  static forRoot(config: SentryConfig): DynamicModule {
    Sentry.init(config);

    return {
      module: SentryModule,
    };
  }
}
