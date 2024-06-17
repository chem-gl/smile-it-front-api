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

import type {
    Molecule,
} from './';

/**
 * @export
 * @interface GeneratePermutationsPostRequest
 */
export interface GeneratePermutationsPostRequest {
    /**
     * @type {Molecule}
     * @memberof GeneratePermutationsPostRequest
     */
    mainMolecule?: Molecule;
    /**
     * @type {Array<Molecule>}
     * @memberof GeneratePermutationsPostRequest
     */
    substitutes?: Array<Molecule>;
}
