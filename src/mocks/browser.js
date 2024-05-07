import * as msw from 'msw';
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Configure a Service Worker with the given request handlers
export const worker = setupWorker(...handlers);

// Expose methods globally to make them available in integration tests
window.msw = { worker, ...msw };
