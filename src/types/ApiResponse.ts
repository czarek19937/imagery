import {Errors, ErrorSource} from "unsplash-js/src/helpers/errors";

export type ApiResponse<T> =
    | {
    type: 'success';
    response: T;
    originalResponse: Response;
    errors?: never;
    status: number;
}
    | {
    type: 'error';
    source: ErrorSource;
    response?: never;
    originalResponse: Response;
    errors: Errors;
    status: number;
};