/**
 * Addable v1.0
 * October 10, 2010
 * Will Atwood Mitchell @ http://freepizza.cc
 *
 * Causes the selected element to add or remove another element. The other element can be a jQuery object
 * or simply a selector. Options for 'adds' include applying an increment counter to each addition, removing the object
 * used as a template (the default behavior), and specifying a selector to remove the added object. Options for
 * 'removes' include specifying where to look for the selector in relation to the control element (parent, next, prev).
 *
 */
;(function($){
  $.fn.adds = function(selector, options) {
    return this.each(function () {
    
      var settings = $.extend({
        counter: null,
        count: 0,
        removalSelector: '.remove',
        removeOriginal: true
      }, options);
    
      var element = $(selector).clone();
      var container = $(selector).parent();
    
      if (settings.removeOriginal) {
        $(selector).remove();
      }
    
      $(this).click(function (event) {
        var newElement = element.clone();
        if (typeof(settings.counter_string) != 'null') {
          newElement.html(element.html().replace(new RegExp(settings.counter, 'g'), settings.count));
        }
        newElement.find(settings.removalSelector).removes(newElement);
        container.append(newElement);
        settings.count++;
        event.preventDefault();
      });

    });
  };

  $.fn.removes = function(selector, options) {
    return this.each(function () {

      settings = $.extend({
        node_type: 'root'
      }, options);
  
      if (typeof(selector) == 'object' || settings.node_type == 'root') {
    
        $(this).click(function (event) {
          $(selector).remove();
          event.preventDefault();
        });
      
      } else {
    
        if (settings.node_type == 'parent') {
      
          var elementToRemove = $(this).parent(selector);
      
        } else if (settings.node_type == 'parents') {
      
          var elementToRemove = $(this).parents(selector);
      
        } else if (settings.node_type == 'prev') {
      
          var elementToRemove = $(this).prev(selector);
      
        } else if (settings.node_type == 'next') {
      
          var elementToRemove = $(this).prev(selector);
      
        }
      
        $(this).click(function (event) {
          elementToRemove.remove();
          event.preventDefault();
        });
      
      }
    });
  }

  $.fn.removesParent = function(selector, options) {
    return this.each(function () {
      $(this).removes('', { node_type : 'parent' });
    });
  }

  $.fn.removesNext = function(selector, options) {
    return this.each(function () {
      $(this).removes('', { node_type : 'next' });
    });
  }

  $.fn.removesPrev = function(selector, options) {
    return this.each(function () {
      $(this).removes('', { node_type : 'prev' });
    });
  }
})(jQuery);