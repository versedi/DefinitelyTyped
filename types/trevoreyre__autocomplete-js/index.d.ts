// Type definitions for @trevoreyre/autocomplete-js 2.0
// Project: https://github.com/trevoreyre/autocomplete/, https://autocomplete.trevoreyre.com/
// Definitions by: versedi <https://github.com/versedi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Autocomplete;

/**
 * Creates a props object with overridden toString function. toString returns an attributes
 * string in the format: `key1="value1" key2="value2"` for easy use in an HTML string.
 */
export class Props {
    /**
     * @param index
     * @param selectedIndex
     * @param baseClass
     */
    constructor(index: string, selectedIndex: string, baseClass: string);
    toString(): string;
}

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

export interface AutocompleteJsOptions {
    /**
     * The search function to be executed on user input. Can be a synchronous function or a Promise.
     * @param input
     */
    search(input: string): () => string | Promise<string>;

    /**
     * Fired when user submits result. Receives result as argument.
     * @param result
     */
    onSubmit(result: object): void;

    baseClass?: string;

    /**
     * Controls whether first result should be highlighted after input
     * Defaults to false
     */
    autoSelect?: boolean;

    /**
     * For complex search results, this function is executed to get the value to display in the input
     * @param result
     */
    getResultValue?(result: object): void;

    /**
     *
     * @param result - The result value returned from your search function
     * @param props - An object containing generated attributes for the result item,
     * which are expected to be set on your li element. The object has a custom toString
     * function which lets you easily serialize it to a String of HTML attributes in
     * the form attribute1="value1" attribute2="value2".
     *
     * This way, you don't have to worry about generating the proper IDs, classes, and ARIA attributes yourself.
     */
    renderResult?(result: object, props: Props): string | Element;
}

export interface EventHandlers {
    handleInput: () => void;
    handleKeyDown: () => void;
    handleBlur: () => void;
    handleResultMouseDown: () => void;
    handleResultClick: () => void;
}

// --------------------------------------------------------------------------------------
// Autocomplete
// --------------------------------------------------------------------------------------

declare global {
    class Autocomplete<TElement = HTMLElement> {
        constructor(inputSelector: string, options?: AutocompleteJsOptions);
        options: AutocompleteJsOptions;
    }
}
