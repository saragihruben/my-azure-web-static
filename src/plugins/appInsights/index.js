const { ApplicationInsights } = require('@microsoft/applicationinsights-web');

export default function () {
  return {
    name: 'docusaurus-plugin-application-insights',

    onRouteDidUpdate({ location }) {
      console.log("AppInsights plugin running, current path:", location.pathname);
      if (!window.appInsightsInitialized) {
        const appInsights = new ApplicationInsights({
          config: {
            instrumentationKey: '1dc2bb26-a0f0-4fa4-a9df-4bbee0ae384d', // Use your real key here
            enableAutoRouteTracking: true,
          },
        });
        appInsights.loadAppInsights();
        window.appInsights = appInsights;
        window.appInsightsInitialized = true;
      }

      window.appInsights?.trackPageView({
        name: location.pathname,
        uri: location.href,
      });
    },
  };
}
