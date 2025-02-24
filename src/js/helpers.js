import { TIMEOUT_SECONDS } from './config';

function timeout(seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} seconds`)
      ),
        seconds * 1000;
    });
  });
}

export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${response.status}: ${data.message}`);
    return data;
  } catch (error) {
    // console.error(`${error} 💀`);
    throw error;
  }
}
