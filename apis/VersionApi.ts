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
import { BaseAPI } from '../runtime';
import type { OperationOpts } from '../runtime';
import type {
    ErrorObject,
    VersionGet200Response,
} from '../models';

/**
 * no description
 */
export class VersionApi extends BaseAPI {

    /**
     * Retorna la versión actual de la API de química.
     * Obtener la versión de la API
     */
    versionGet(): Observable<VersionGet200Response>
    versionGet(opts?: OperationOpts): Observable<AjaxResponse<VersionGet200Response>>
    versionGet(opts?: OperationOpts): Observable<VersionGet200Response | AjaxResponse<VersionGet200Response>> {
        return this.request<VersionGet200Response>({
            url: '/version',
            method: 'GET',
        }, opts?.responseOpts);
    };

}