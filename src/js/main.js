/*!
 * main.js
 * All JavaScript for Chenglong Wei's Home website
 * Author: Chenglong Wei
 * github: https://github.com/longprowei
 */
(function() {
  'use strict';
  console.log('Are you interested my site? Please access my Github: \n');
  console.log('https://github.com/longprowei \n');
  console.log('for source code.');

  function updateCopyrightYear() {
      var copyrightYear = $('#copyright-year');
      if (copyrightYear.length > 0) {
          var d = new Date();
          copyrightYear.text(d.getFullYear());
      }
  }

  updateCopyrightYear();
})();
