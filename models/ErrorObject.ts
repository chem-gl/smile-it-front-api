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

/**
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * Descripción del error.
     * @type {string}
     * @memberof ErrorObject
     */
    descripcion?: string;
    /**
     * Código numérico del error.
     * @type {number}
     * @memberof ErrorObject
     */
    codigo?: number;
    /**
     * Detalles adicionales sobre el error.
     * @type {string}
     * @memberof ErrorObject
     */
    detalles?: string;
}