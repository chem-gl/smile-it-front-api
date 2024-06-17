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
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders } from '../runtime';
import type {
    ErrorObject,
    GeneratePermutationsPostRequest,
    GeneratedMolecule,
} from '../models';

export interface GeneratePermutationsPostRequest {
    generatePermutationsPostRequest: GeneratePermutationsPostRequest;
}

/**
 * no description
 */
export class PermutationsApi extends BaseAPI {

    /**
     * Genera todas las permutaciones posibles de una molécula principal con una lista de sustituyentes.
     * Generar permutaciones de moléculas
     */
    generatePermutationsPost({ generatePermutationsPostRequest }: GeneratePermutationsPostRequest): Observable<Array<GeneratedMolecule>>
    generatePermutationsPost({ generatePermutationsPostRequest }: GeneratePermutationsPostRequest, opts?: OperationOpts): Observable<AjaxResponse<Array<GeneratedMolecule>>>
    generatePermutationsPost({ generatePermutationsPostRequest }: GeneratePermutationsPostRequest, opts?: OperationOpts): Observable<Array<GeneratedMolecule> | AjaxResponse<Array<GeneratedMolecule>>> {
        throwIfNullOrUndefined(generatePermutationsPostRequest, 'generatePermutationsPostRequest', 'generatePermutationsPost');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<Array<GeneratedMolecule>>({
            url: '/generatePermutations',
            method: 'POST',
            headers,
            body: generatePermutationsPostRequest,
        }, opts?.responseOpts);
    };

}