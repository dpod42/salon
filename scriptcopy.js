
// This script needs to support redirects from urls like weebly's

(function() {
  function getScriptTag() {;
    } catch (e) { // above not certain to work in all browser + tag scenarios, fall back to document
      return document.body.clientWidth;
    }
  }

  if (takeOverIframe()) {
    window.location = 'https://squareup.com/appointments/buyer/widget/m430uip2eut5qy/LEKCS9W15P4Z1';
  } else {
    if (scriptParentWidth() < 280) {
      embedBookingButton();
    } else {
      embedIframe();
    }

  }

})();
