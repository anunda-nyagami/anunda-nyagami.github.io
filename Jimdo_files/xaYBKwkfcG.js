// Upscope configuration for jimdo.com

  window.Upscope.__defaultConfiguration = {
  "beta": true,
  "teamDomain": "jimdo.com",
  "showUpscopeLink": true,
  "showTerminateButton": true,
  "trackConsole": false,
  "allowRemoteConsole": false,
  "allowRemoteScroll": true,
  "allowRemoteClick": true,
  "allowRemoteType": true,
  "injectLookupCodeButton": false,
  "enableLookupCodeOnKey": true,
  "lookupCodeKeyTitle": "Co-browsing Code",
  "lookupCodeKeyMessage": "Teile diesen Code mit dem Support Mitarbeiter: {%lookupCode%}",
  "requireAuthorizationForSession": true,
  "authorizationPromptTitle": "Anfrage zum Bildschirm teilen",
  "authorizationPromptMessage": "Möchtest du, dass dir jemand vom Jimdo Support bei deiner Website hilft und deinen Bildschirm teilen? Alle Informationen zur Verarbeitung deiner Daten findest du hier: de.jimdo.com/info/datenschutzerklaerung",
  "endOfScreenshareMessage": "Wir hoffen, wir konnten dir weiterhelfen!",
  "callPromptText": "Ein Mitarbeiter vom Jimdo Support möchte mit dir über die ersten Schritte auf deiner Webseite sprechen. Bitte stelle sicher, das du dein Mikrofon aktiviert hast. Drücke den grünen Knopf zum annehmen.",
  "resetConnectionOnLogOut": true,
  "translationsYes": "Ja",
  "translationsNo": "Nein",
  "translationsOk": "OK",
  "translationsStopSession": "Sitzung beenden",
  "showAgentRequestButton": "never",
  "collectHistory": false,
  "autoconnect": true,
  "allowAgentRedirect": false,
  "rewriteExternalLinks": false,
  "proxyEnabled": true,
  "region": "eu-central",
  "apiKey": "xaYBKwkfcG"
};
  window.Upscope.__defaultRegion = "ap-southeast";

  var scriptUrl = 'https://js.upscope.io/upscope-1.16.133.js';

  if (window.Upscope.addScript) {
    window.Upscope.addScript(scriptUrl);
  } else {
    (function(){
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.charset = 'utf-8';
      s.src = scriptUrl;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    })();
  }
