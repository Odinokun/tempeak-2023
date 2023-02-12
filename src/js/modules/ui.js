module.exports = function () {

  // BEGIN create transparent select
  function findTransparentSelects() {
    const transparentSelects = document.querySelectorAll('.select--transparent');

    if (transparentSelects) {
      for (let i = 0; i < transparentSelects.length; i++) {
        createTransparentSelect(transparentSelects[i]);
      }
    }
  }

  function createTransparentSelect(select) {
    $(select).selectmenu({
      open: function (event, data) {
        const openSelectId = event.target.id;
        const openSelectOptions = document.getElementById(openSelectId + '-menu');

        customScroll(openSelectOptions)

        //BEGIN что бы это говно вправо за экран не уезжало
        const viewportOffset = openSelectOptions.getBoundingClientRect();
        const viewportOffsetLeft = viewportOffset.left;
        const optionsWidth = viewportOffset.width;
        const fackingWidth = viewportOffsetLeft + optionsWidth;

        if (fackingWidth >= window.innerWidth) {
          console.log('hello')
          openSelectOptions.parentNode.style.left = 'auto';
          openSelectOptions.parentNode.style.right = '10px';
        }
        //END что бы это говно вправо за экран не уезжало
      }
    })

    .selectmenu("menuWidget")
    .addClass("select--transparent-options");
  }

  findTransparentSelects();
  // END create transparent select


  //BEGIN custom select => options scrollbar
  function customScroll(scrollBlock) {
    new SimpleBar(scrollBlock, {
      autoHide: false,
      forceVisible: false,
      classNames: {
        resizeWrapper: 'simplebar-resize-wrapper',
        content: 'simplebar-content',
        offset: 'simplebar-offset',
        mask: 'simplebar-mask',
        wrapper: 'simplebar-wrapper',
        placeholder: 'simplebar-placeholder',
        scrollbar: 'simplebar-scrollbar',
        track: 'simplebar-track',
        heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
        heightAutoObserverEl: 'simplebar-height-auto-observer',
        visible: 'simplebar-visible',
        horizontal: 'simplebar-horizontal',
        vertical: 'simplebar-vertical',
        hover: 'simplebar-hover',
        dragging: 'simplebar-dragging'
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      direction: 'ltr',
      timeout: 1000
    })
  }

  //END custom select => options scrollbar

};
