// window.addEventListener('DOMContentLoaded', () => {
//   tabbis();
// });
// (function($) {
//   $.fn.multitabs = function() {
//     var _this = $(this);
//     var tabs = _this.children('.tab__header[data-child="false"]').children('button');
//     var childrenTabs = _this.find('.tab__header[data-child="true"]').children('button');

//     $(tabs).add(childrenTabs).on('click', function() {
//       var num;
//       var _this = $(this);
//       var classNameTab = _this.attr('class').split(' ');
//       var classNameContent = _this.parent().siblings().children();

//       for (i = 0; i <= classNameTab.length; i++) {
//         if (/([\d.]+)/.test(classNameTab[i])) {
//           var isChild = $(_this).parent().data('child');
//           num = classNameTab[i].split('-')[1];
          
//           if (!isChild) {
//             $(tabs).removeClass('active');
//             $(_this).addClass('active');
//           } else {
//             $(_this).siblings().removeClass('active');
//             $(_this).addClass('active');
//           }

//         }
//       }

//       $(classNameContent).each(function(i, n) {
//         var name = $(n).attr('class').split(' ');
//         for (n = 0; n <= name.length; n++) {
//           if (name[n] != undefined) {
//             if (/([\d.]+)/.test(name[n])) {
//               if (num === name[n].split('-')[1]) {
//                 var el = $(classNameContent)[num - 1];
//                 $(classNameContent).removeClass('active');
//                 $(el).addClass('active');
//               }
//             }
//           }
//         }
//       });

//     });

//   }
// })(jQuery);

// $('.tab1').multitabs();
