import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

let appInsights;

export default function AppInsightsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!appInsights) {
      appInsights = new ApplicationInsights({
        config: {
          instrumentationKey: '1dc2bb26-a0f0-4fa4-a9df-4bbee0ae384d', // YOUR KEY here
          enableAutoRouteTracking: true,
        },
      });
      appInsights.loadAppInsights();
    }

    appInsights.trackPageView({ name: location.pathname, uri: window.location.href });
  }, [location.pathname]);

  return <>{children}</>;
}
