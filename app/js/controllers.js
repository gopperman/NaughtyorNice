//'use strict';

/* Controllers */
function mainController($scope, $http) {
	$scope.showQuiz = function() {
		length = 600;
		jQuery('h1').fadeOut(length, function() {});
		jQuery('#findOut').fadeOut(length, function() {
				//jQuery('header').fadeOut(length);
				jQuery('header').animate({height: "toggle"}, 1000);
		});
		$scope.showQuiz = false;
	}
	$scope.nextQ = function() {
		jQuery( '#questions li:nth-child('+ $scope.qnum +')' ).fadeOut(400, function() {
			$scope.qnum++;
			jQuery( '#questions li:nth-child('+ $scope.qnum +')' ).fadeIn(400);		
		});
	}
	$scope.prevQ = function() {
		jQuery( '#questions li:nth-child('+ $scope.qnum +')' ).fadeOut(400, function() {
			$scope.qnum--;
			jQuery( '#questions li:nth-child('+ $scope.qnum +')' ).fadeIn(400);		
		});
	}
	$scope.enable = function() {
		jQuery( '#questions li:nth-child('+ $scope.qnum +') .next' ).fadeIn(500);		
		$scope.checkScore();
		console.log($scope.score); 
	}
	$scope.checkScore = function() {
		$scope.score = 0;
		jQuery('input').each(function() {
			if (jQuery(this).is(':checked') ) {
				$scope.score += parseInt(jQuery(this).val());
			}
		}); 
	};
	$scope.calculate = function() {
		if ($scope.score == 0) {$scope.flavor = "What a balance! It was a close call, but we'll give you the benefit of the doubt.";}
		if ($scope.score < 0) {$scope.flavor = "You better shape up, or you're getting a fat lump of coal this year!";}
		if ($scope.score <= -100) {$scope.flavor = "Wow! I didn't even know it was possible to be so naughty!";}
		if ($scope.score > 0) {$scope.flavor = "You're nice, but not in a creepy way.";}
		if ($scope.score >= 100) {$scope.flavor = "Wow! You must be some kind of saint! You should lighten up a bit, and have some fun.";}
		jQuery('#endQuiz').fadeOut(500, function() {
			//Calculating stuff
			jQuery('#calculating').fadeIn(500, function() {
				setTimeout(function() {
					jQuery('#calculating h3').html('Carrying the 5...');
					setTimeout(function() {
						jQuery('#calculating h3').html('Cross-referencing NSA databases...');
					}, 2000);
 
					jQuery('#calculating').delay(4500).fadeOut(500, function() {
						if ($scope.score < 0) {
							jQuery('#overlay').animate({opacity: 1}, 1000);
						}
						jQuery('#results').delay(1000).fadeIn(800);
					});
				}, 2000);
			});
		});

	};
	$scope.flavor = ""
	$scope.qnum = 1;
	$scope.score = 0;
	$scope.answers = [];
}
