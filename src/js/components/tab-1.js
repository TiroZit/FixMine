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
  document.querySelector('.donate').innerHTML +=`<div class=donate__container  hidden="" role="tabpanel" aria-labelledby="tab-0-2" id="tabpanel-0-2" tabindex="0">
          <nav class=tabs__footer-items data-tabs><button
              class=tabs__footer-link>Один Блок</button><button class=tabs__footer-link>БедВарс</button></nav>
          <div class=donate__title-block>
            <div class="o-block donate__block"></div>
            <h2 class=donate__title>Покупка привилегий</h2>
          </div>
          <div class=donate__wrapper data-panes>
            <div class=donate__items><a class=donate__item data-path=donate>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a><a class=donate__item data-path=donate>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a><a class=donate__item data-path=donate>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a></div>
            <div class=donate__items><a class=donate__item>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a><a class=donate__item>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a></div>
            <div class=donate__items><a class=donate__item>
                <div class=donate__item-price>1000₽</div>
                <div class=donate__item-content>
                  <div class=donate__item-image><img src=img/donate/helper.webp alt=Helper>
                    <div class=donate__item-title>Helper</div>
                  </div>
                  <div class=donate__item-cart><svg class=cart style="width: 30px; height: 30px; fill: ; stroke: #000;">
                      <use xlink:href=img/sprite.svg#cart></use>
                    </svg></div>
                </div>
              </a></div>
          </div>
        </div>
`;
  document.querySelector('.tabs__header-items').innerHTML += `<button class=tabs__header-link aria-selected="false" tabindex="-1" role="tab" aria-controls="tabpanel-0-2" id="tab-0-2">Привилегии</button>`;
