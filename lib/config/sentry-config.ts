import * as Sentry from '@sentry/node';
import { LogLevel } from './log-level.enum';

export interface SentryConfig extends Sentry.NodeOptions {
  logLevel?: LogLevel;
}
