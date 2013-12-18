<!DOCTYPE html>
<?php $appname = "NoN"; ?>
<html ng-app="<?=$appname?>">
<head>
  <meta charset="utf-8">

  <title>Naughty or Nice by Image Conscious Studios</title>
	<link rel="canonical" href="http://naughty-or-nice.co">

	<link type="text/css" rel="stylesheet" href="http://fast.fonts.net/cssapi/d9a34d2b-951a-467d-9aaf-68bf93e324dc.css"/>
	<link rel="stylesheet" href="/app/css/normalize.css">
	<link rel="stylesheet" href="/app/css/app.css">

	<meta property="og:url" content="http://naughty-or-nice.co" />
	<meta property="og:title" content="Have you been NAUGHTY or NICE this year? Take the test and find out..." />
	<meta property="og:description" content="Santa lost his naughty or nice list, so help him by answering a few questions. Be Honest!" />
	<meta property="og:image" content="http://xmas.gopperman.com/app/img/santa-fb.jpg" />
</head>
<body id="letitsnow">
	<div id="app" ng-view>
	</div>
	<div id="snowflakesContainer"></div>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="/app/js/main.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

	<script type='text/javascript' src='/app/js/controllers.js'></script>
	<script type='text/javascript' src='/app/js/app.js'></script>
	<script type='text/javascript' src='/app/js/filters.js'></script>
</body>
</html>
