<?php
  // Set up
  add_theme_support( 'post-thumbnails' );

  // Remove Updates Norifications
  function remove_core_updates(){
    global $wp_version;return(object) array('last_checked'=> time(),'version_checked'=> $wp_version,);
  }
  add_action( 'rest_api_init', 'rest_api_filter_add_filters' );
  /**
    * Add the necessary filter to each post type
    **/
  function rest_api_filter_add_filters() {
    foreach ( get_post_types( array( 'show_in_rest' => true ), 'objects' ) as $post_type ) {
      add_filter( 'rest_' . $post_type->name . '_query', 'rest_api_filter_add_filter_param', 10, 2 );
    }
  }
  /**
  * Add the filter parameter
  *
  * @param  array           $args    The query arguments.
  * @param  WP_REST_Request $request Full details about the request.
  * @return array $args.
  **/
  function rest_api_filter_add_filter_param( $args, $request ) {
    // Bail out if no filter parameter is set.
    if ( empty( $request['filter'] ) || ! is_array( $request['filter'] ) ) {
      return $args;
    }
    $filter = $request['filter'];
    if ( isset( $filter['posts_per_page'] ) && ( (int) $filter['posts_per_page'] >= 1 && (int) $filter['posts_per_page'] <= 100 ) ) {
      $args['posts_per_page'] = $filter['posts_per_page'];
    }
    global $wp;
    $vars = apply_filters( 'query_vars', $wp->public_query_vars );
    foreach ( $vars as $var ) {
      if ( isset( $filter[ $var ] ) ) {
        $args[ $var ] = $filter[ $var ];
      }
    }
    return $args;
  }
  add_filter('pre_site_transient_update_core','remove_core_updates');
  add_filter('pre_site_transient_update_plugins','remove_core_updates');
  add_filter('pre_site_transient_update_themes','remove_core_updates');
  // Disable WooCommerce redirect
  add_filter( 'woocommerce_product_is_visible','product_invisible');
  function product_invisible(){
    return false;
  }
  add_filter( 'woocommerce_register_post_type_product','hide_product_page',12,1);
  function hide_product_page($args){
    $args["publicly_queryable"]=false;
    return $args;
  }
?>
