<?php
  $url = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  if($url != $_SERVER['HTTP_HOST'] . '/' && !strripos($url, '?'))
  	header("Location: /" );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset=<?php bloginfo("charset"); ?>>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head() ?>
    <script type="text/javascript">(function(a,l,b,c,r,s){_nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];r.async=1;
    r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;s.parentNode.insertBefore(r,s);
    })(document,"script","serve.albacross.com/track.js","89208293");</script>
    <link href="/wp-content/themes/ethereum_theme/ethereum-app/dist/bundle.css" rel="stylesheet"/>
    <link rel="shortcut icon" href="/wp-content/themes/ethereum_theme/ethereum-app/dist/media/favicon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <script type="text/javascript">
      window.onload = function() {
        var elements = document.getElementsByClassName('preloader__spinner');
         for (var i=0; i<elements.length; i++)  {
           elements[i].className = elements[i].className.replace('preloader__spinner', 'preloader__spinner_none')
         }
         var elements = document.getElementsByClassName('page-preloader');
          for (var i=0; i<elements.length; i++)  {
            elements[i].className = elements[i].className.replace('page-preloader', 'page-preloader-none')
          }
      }
    </script>
    <style media="screen">
      .page-preloader {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: white;
        z-index: 50;
      }
      .page-preloader-none{
        display: none;
      }
      .preloader__spinner {
        width: 250px;
        height: 250px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -125px;
        margin-top: -125px;
        background: url('/wp-content/themes/ethereum_theme/ethereum-app/dist/media/spinner.gif') no-repeat 100% 100%;
        z-index: 50
      }
      .preloader__spinner_none{
        display: none;
      }
    </style>
  </head>
  <body>
    <div class="page-preloader"><span class="preloader__spinner"></span></div>
    <div id='root'></div>
    <script src="/wp-content/themes/ethereum_theme/ethereum-app/dist/bundle.js"></script>
    <script type="text/javascript">(function(a,l,b,c,r,s){_nQc=c,r=a.createElement(l),s=a.getElementsByTagName(l)[0];r.async=1;
    r.src=l.src=("https:"==a.location.protocol?"https://":"http://")+b;s.parentNode.insertBefore(r,s);
    })(document,"script","serve.albacross.com/track.js","89208293");</script>
    <script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-105192551-1', 'auto');
    ga('send', 'pageview');

    </script>
    <?php wp_footer(); ?>
  </body>
</html>



