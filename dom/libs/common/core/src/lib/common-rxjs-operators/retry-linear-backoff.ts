import { iif, MonoTypeOperatorFunction, Observable, of, throwError } from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';

export const retryLinearBackoff = <T>(maxAttempts: number, backoffWaitTimeInMs: number): MonoTypeOperatorFunction<T> =>
  (source: Observable<T>) =>
    source.pipe(
      retryWhen(errors =>
        errors.pipe(
          concatMap((error, attempt) =>
            iif(() => attempt >= maxAttempts, throwError(error), of(error).pipe(delay(attempt * backoffWaitTimeInMs)))
          )
        )
      )
    );
