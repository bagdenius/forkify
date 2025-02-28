import { TIMEOUT_SECONDS } from './config';

function timeout(seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${seconds} seconds`)
      );
    }, seconds * 1000);
  });
}

export async function AJAX(url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          method: `POST`,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);
    const response = await Promise.race([
      fetchPromise,
      timeout(TIMEOUT_SECONDS),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${response.status}: ${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
}

/*
export async function getJSON(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${response.status}: ${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function sendJSON(url, uploadData) {
  try {
    const response = await Promise.race([
      fetch(url, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      }),
      timeout(TIMEOUT_SECONDS),
    ]);
    const data = await response.json();
    if (!response.ok) throw new Error(`${response.status}: ${data.message}`);
    return data;
  } catch (error) {
    throw error;
  }
}
*/
