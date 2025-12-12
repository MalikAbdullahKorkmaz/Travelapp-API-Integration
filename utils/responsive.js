import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Define Breakpoints
// Small devices (phones) < 600
// Medium devices (small tablets) >= 600
// Large devices (large tablets) >= 992 (New breakpoint for large-tablet layout)
const BREAKPOINT_MEDIUM = 600;
const BREAKPOINT_LARGE = 992;

/**
 * Checks if the current device width is considered a large tablet or desktop.
 * @returns {boolean}
 */
export const isLargeTablet = () => width >= BREAKPOINT_LARGE;

/**
 * Checks if the current device width is considered a tablet (medium or large).
 * @returns {boolean}
 */
export const isTablet = () => width >= BREAKPOINT_MEDIUM;

/**
 * Custom hook to get current dimensions and check for orientation-aware layout.
 * Implements orientation-aware layout using width-height comparison.
 * @returns {{width: number, height: number, isPortrait: boolean, isLandscape: boolean, isLargeTablet: boolean, isTablet: boolean}}
 */
export const useResponsiveDimensions = () => {
  const { width: currentWidth, height: currentHeight } = Dimensions.get('window');

  const isPortrait = currentHeight >= currentWidth;
  const isLandscape = currentWidth > currentHeight;
  const isCurrentLargeTablet = currentWidth >= BREAKPOINT_LARGE;
  const isCurrentTablet = currentWidth >= BREAKPOINT_MEDIUM;

  return {
    width: currentWidth,
    height: currentHeight,
    isPortrait,
    isLandscape,
    isLargeTablet: isCurrentLargeTablet,
    isTablet: isCurrentTablet,
  };
};

/**
 * Function to scale font size based on screen width for responsive scaling.
 * @param {number} size - The base font size.
 * @returns {number} - The scaled font size.
 */
export const scaleFontSize = (size) => {
  const baseWidth = 375; // iPhone 8 width as a base
  const scale = width / baseWidth;
  const newSize = size * scale;
  // Optional: Add a minimum/maximum size to prevent extreme scaling
  return Math.round(newSize);
};

/**
 * Function to scale a value (e.g., padding, margin, icon size) based on screen width.
 * @param {number} size - The base size.
 * @returns {number} - The scaled size.
 */
export const scaleSize = (size) => {
  const baseWidth = 375;
  const scale = width / baseWidth;
  return Math.round(size * scale);
};
