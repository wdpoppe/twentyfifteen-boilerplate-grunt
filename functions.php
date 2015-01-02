<?php 
error_reporting(E_ALL ^ E_NOTICE);


/**
 * All JS files are concatenated in Gruntfile.js to prevent the use of multiple js files in production.
 * Remove all included javascript files with wp_deregister_script.
 */


remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'jquery');

/**
 * All JS files are concatenated in Gruntfile.js to prevent the use of multiple js files in production.
 * Remove all wordpress included javascript files with wp_deregister_script.
 */

function remove_scripts(){
    wp_deregister_script('jquery' );
    wp_deregister_script('twentyfifteen-skip-link-focus-fix' );
}
add_action( 'wp_enqueue_scripts', 'remove_scripts', 100 );



/**
 * Register the production.min.js
 * All js files used for the frontend are located and minified in production.min.js 
 */

function child_add_scripts() {
    wp_register_script(
        'production-minified',
        get_stylesheet_directory_uri() . '/js/build/production.min.js',
        false,
        '1.0',
        true
    );

    wp_enqueue_script( 'production-minified' );
}
add_action( 'wp_enqueue_scripts', 'child_add_scripts' );

?>