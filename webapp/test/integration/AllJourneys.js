sap.ui.define([
  "sap/ui/test/Opa5",
  "com/myorg/myUIApp/test/integration/arrangements/Startup",
  "com/myorg/myUIApp/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
