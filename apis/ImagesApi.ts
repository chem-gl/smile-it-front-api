// tslint:disable
/**
 * API de Química
 * API para generar permutaciones de moléculas y obtener imágenes basadas en SMILES.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    ErrorObject,
    GetImageWithSubstituteSmilePostRequest,
} from '../models';

export interface GetImageSmileGetRequest {
    smile: string;
}

export interface GetImageWithSubstitutePostRequest {
    getImageWithSubstituteSmilePostRequest: GetImageWithSubstituteSmilePostRequest;
}

export interface GetImageWithSubstituteSmilePostRequest {
    smile: string;
    getImageWithSubstituteSmilePostRequest: GetImageWithSubstituteSmilePostRequest;
}

/**
 * no description
 */
export class ImagesApi extends BaseAPI {

    /**
     * Retorna la imagen de una molécula basada en un SMILES proporcionado.
     * Obtener imagen de una molécula en formato SMILES
     */
    getImageSmileGet({ smile }: GetImageSmileGetRequest): Observable<Blob>
    getImageSmileGet({ smile }: GetImageSmileGetRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    getImageSmileGet({ smile }: GetImageSmileGetRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {
        throwIfNullOrUndefined(smile, 'smile', 'getImageSmileGet');

        return this.request<Blob>({
            url: '/getImage/{smile}'.replace('{smile}', encodeURI(smile)),
            method: 'GET',
            responseType: 'blob',
        }, opts?.responseOpts);
    };

    /**
     * Retorna la imagen de una molécula y su sustituyente.
     * Obtener imagen de una molécula con su sustituyente
     */
    getImageWithSubstitutePost({ getImageWithSubstituteSmilePostRequest }: GetImageWithSubstitutePostRequest): Observable<Blob>
    getImageWithSubstitutePost({ getImageWithSubstituteSmilePostRequest }: GetImageWithSubstitutePostRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    getImageWithSubstitutePost({ getImageWithSubstituteSmilePostRequest }: GetImageWithSubstitutePostRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {
        throwIfNullOrUndefined(getImageWithSubstituteSmilePostRequest, 'getImageWithSubstituteSmilePostRequest', 'getImageWithSubstitutePost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<Blob>({
            url: '/getImageWithSubstitute',
            method: 'POST',
            headers,
            body: getImageWithSubstituteSmilePostRequest,
            responseType: 'blob',
        }, opts?.responseOpts);
    };

    /**
     * Retorna la imagen de una molécula y su sustituyente basados en un SMILES proporcionado.
     * Obtener imagen de una molécula con su sustituyente en formato SMILES
     */
    getImageWithSubstituteSmilePost({ smile, getImageWithSubstituteSmilePostRequest }: GetImageWithSubstituteSmilePostRequest): Observable<Blob>
    getImageWithSubstituteSmilePost({ smile, getImageWithSubstituteSmilePostRequest }: GetImageWithSubstituteSmilePostRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    getImageWithSubstituteSmilePost({ smile, getImageWithSubstituteSmilePostRequest }: GetImageWithSubstituteSmilePostRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {
        throwIfNullOrUndefined(smile, 'smile', 'getImageWithSubstituteSmilePost');
        throwIfNullOrUndefined(getImageWithSubstituteSmilePostRequest, 'getImageWithSubstituteSmilePostRequest', 'getImageWithSubstituteSmilePost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<Blob>({
            url: '/getImageWithSubstitute/{smile}'.replace('{smile}', encodeURI(smile)),
            method: 'POST',
            headers,
            body: getImageWithSubstituteSmilePostRequest,
            responseType: 'blob',
        }, opts?.responseOpts);
    };

}