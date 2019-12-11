// Type definitions for lightbox2 2.11
// Project: https://github.com/lokesh/lightbox2, https://lokeshdhakar.com/projects/lightbox2/
// Definitions by: versedi <https://github.com/versedi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace lightbox2;

// --------------------------------------------------------------------------------------
// Options Interfaces
// --------------------------------------------------------------------------------------

export interface LightboxOptions {
    /**
     * The text displayed below the caption when viewing an image set.
     * The default text shows the current image number and the total number of images in the set.
     * Default false
     */
    albumLabel?: string;

    /**
     * If true, the left and right navigation arrows which appear on mouse hover when viewing image sets will
     * always be visible on devices which support touch.
     * Default "Image %1 of %2"
     */
    alwaysShowNavOnTouchDevices?: boolean;

    /**
     * If true, prevent the page from scrolling while Lightbox is open.
     * This works by settings overflow hidden on the body.
     * Default false
     */
    disableScrolling?: boolean;

    /**
     * The time it takes for the Lightbox container and overlay to fade in and out, in milliseconds.
     * Default 600
     */
    fadeDuration?: number;

    /**
     * If true, resize images that would extend outside of the viewport so they fit neatly inside of it.
     * This saves the user from having to scroll to see the entire image.
     * Default true
     */

    fitImagesInViewport?: boolean;

    /**
     * The time it takes for the image to fade in once loaded, in milliseconds.
     * Default 600
     */
    imageFadeDuration?: number;

    /**
     * If set, the image width will be limited to this number, in pixels. Aspect ratio will not be maintained.
     */
    maxWidth?: number;

    /**
     * If set, the image height will be limited to this number, in pixels. Aspect ratio will not be maintained.
     */
    maxHeight?: number;

    /**
     * The distance from top of viewport that the Lightbox container will appear, in pixels.
     * Default 50
     */
    positionFromTop?: number;

    /**
     * The time it takes for the Lightbox container to animate its width and height when transition between
     * different size images, in milliseconds.
     * Default 700
     */
    resizeDuration?: number;

    /**
     * If false, the text indicating the current image number and the total number of images in set
     * (Ex. "image 2 of 4") will be hidden.
     * Default true
     */
    showImageNumberLabel?: boolean;

    /**
     * If true, when a user reaches the last image in a set,
     * the right navigation arrow will appear and they will be to continue moving forward
     * which will take them back to the first image in the set.
     * Default false
     */
    wrapAround?: boolean;
}

// --------------------------------------------------------------------------------------
// lightbox2
// --------------------------------------------------------------------------------------

declare global {
    class lightbox2 {
        options: LightboxOptions;
    }
}
