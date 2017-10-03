import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(itemToReveal, itemOffset) {
    this.itemsToReveal = itemToReveal;
    this.hideInitially();
    this.createWaypoints(itemOffset);
  }


  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints(itemOffset) {

    this.itemsToReveal.each(function(){
      var currentItem = this;

      new Waypoint({
        element:currentItem,
        handler:function(){
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset:itemOffset

      });/**/
    });

  }

}

export default RevealOnScroll;
