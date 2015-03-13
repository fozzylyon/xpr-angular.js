/**
 * xpr-angular
 *
 * /src/module.js
 *
 * Angular Module for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular', []);

})(window.angular);

/**
 * xpr-angular
 *
 * /src/xprmntlDirective.js
 *
 * Angular Directive for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular')
    .directive('xprFeature', [
      'xprService',

      function xprFeature(service) {
        return {
          scope: false,

          link: function(scope, elem, attr) {
            var feature = attr.xprFeature;

            if (! service.feature) return elem.remove();

            scope.$watch(function() {
              return service.feature(feature);
            }, function(curr) {
              if (curr) return elem.removeClass('hide');
              elem.addClass('hide');
            });
          }
        };
      }
    ]);

})(window.angular);

/**
 * xpr-angular
 *
 * /src/xprmntlService.js
 *
 * Angular Service for XPRMNTL xpr-toggle
 */

(function(angular) {
  'use strict';

  angular.module('xpr-angular')
    .service('xprService', [
      '$rootScope',
      '$window',

      function xprService($scope, $window) {

        var xpr = $window.xpr || {}
          , sE = xpr.saveExps;

        xpr.saveExps = function() {
          sE.apply(xpr, arguments);
          $scope.$digest();
        };

        return {
          feature: feature
        };

        function feature(name) {
          return xpr.feature(name);
        }

      }
    ]);

})(window.angular);
