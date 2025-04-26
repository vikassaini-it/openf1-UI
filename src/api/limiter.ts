import axios from "axios";
import Bottleneck from "bottleneck";

// Create rate limiter with OpenF1 limits
const limiter = new Bottleneck({
  reservoir: 30, // initial value
  reservoirRefreshAmount: 30,
  reservoirRefreshInterval: 10 * 1000, // must be divisible by 250

  // also use maxConcurrent and/or minTime for safety
  maxConcurrent: 1,
  // minTime: 333 // ~3 requests per second
});

/**
 * Makes a rate-limited GET request to OpenF1 API
 * @param url The OpenF1 API endpoint to request
 * @returns Promise with the response data
 */
export const getOpenF1WithinLimit = async (url: string) => {
  // Wrap the axios call with the limiter
  return limiter.schedule(async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching from OpenF1 API: ${url}`, error);
      throw error;
    }
  });
};

// Example usage:
// async function getDrivers() {
//   try {
//     const drivers = await getOpenF1WithinLimit('https://api.openf1.org/v1/drivers');
//     console.log(drivers);
//   } catch (error) {
//     console.error('Failed to get drivers:', error);
//   }
// }