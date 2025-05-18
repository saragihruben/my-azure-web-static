import React from 'react';
import AppInsightsWrapper from '../components/AppInsightsWrapper';

export default function Root({ children }) {
  return <AppInsightsWrapper>{children}</AppInsightsWrapper>;
}
