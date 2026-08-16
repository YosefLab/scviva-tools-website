// Custom SearchBar component that safely handles docs plugin being disabled
import React from 'react';

export default function SearchBar() {
  // Render nothing - search functionality is disabled when docs plugin is not enabled
  // This prevents errors from SearchBar trying to access non-existent docs plugin data
  return null;
}
