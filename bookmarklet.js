javascript:(function(){      const style = ` .hide-ui .GameCanvasContainer-settings, .hide-ui .GameVideosContainer-videobar-container, .hide-ui .GameVideo-self-video-container, .hide-ui .RightBar-container, .hide-ui .GameCanvas-body {     display: none; }`;     const STYLE_ID = 'clp-toggle-style';     let style_elem = document.getElementById(STYLE_ID);     if(!style_elem) {         style_elem = document.createElement('style');         style_elem.setAttribute('id',STYLE_ID);         style_elem.textContent = style;         document.head.appendChild(style_elem);     }      document.body.classList.toggle('hide-ui'); })() 