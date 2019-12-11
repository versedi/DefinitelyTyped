// Type definitions for autocomplete-js
// Project: https://github.com/trevoreyre/autocomplete/, https://autocomplete.trevoreyre.com/
// Definitions by: versedi <https://github.com/versedi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Autocomplete;


/**
 * * Creates a props object with overridden toString function. toString returns an attributes
 string in the format: `key1="value1" key2="value2"` for easy use in an HTML string.
 */
export class Props {
    /**
     * @param index string
     * @param selectedIndex string
     * @param baseClass string
     */
    constructor(index: string, selectedIndex: string, baseClass: string);
    toString(): string
}


// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

export interface AutocompleteOptions {
    /**
     * The search function to be executed on user input. Can be a synchronous function or a Promise.
     * @param input
     */
    search(input: string): Function|Promise<string>,

    /**
     * Controls whether first result should be highlighted after input
     * Defaults to false, optional
     */
    autoSelect?: boolean,

    /**
     * Sets the value of the calling component's input element
     */
    setValue? (): Function,

    /**
     * Sets attributes on the calling component's input element
     */
    setAttribute? (): Function,

    /**
     * Fired when the results list is updated. Receives results (Array), and selectedIndex (Number) as arguments.
     */
    onUpdate? (): Function,

    /**
     * Fired when user submits result. Receives result as argument.
     * @param result
     */
    onSubmit(result: object): void,

    /**
     *
     * @param result
     * @param props
     */
    renderResult(result: object, props: Props): string

    /**
     * Fired when the results list is shown
     */
    onShow? (): Function,

    /**
     * Fired when the results list is hidden
     */
    onHide? (): Function,

    /**
     * Fired if search is a Promise and hasn't resolved yet
     */
    onLoading? (): Function,

    /**
     * Fired after asynchronous search function resolves
     */
    onLoaded? (): Function,
}

export interface EventHandlers {
    handleInput: Function,
    handleKeyDown: Function,
    handleBlur: Function,
    handleResultMouseDown: Function,
    handleResultClick: Function,
}


// --------------------------------------------------------------------------------------
// Autocomplete
// --------------------------------------------------------------------------------------

declare global {
    interface Autocomplete<TElement = HTMLElement> {
        constructor(inputSelector: string, options?: AutocompleteOptions);
    }
}
