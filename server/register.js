// Register package as ReactionCommerce package
ReactionCore.registerPackage({
  label: "Bees Knees",
  name: "beesknees",
  icon: "fa fa-vine",
  autoEnable: true,
  layout: [{
    layout: "coreLayoutBeesknees",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "productsLanding",
      layoutHeader: "layoutHeaderBeesknees",
      layoutFooter: "layoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
