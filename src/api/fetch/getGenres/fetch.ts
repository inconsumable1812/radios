import type { Response } from './types';

const fetch = async (): Promise<Response | globalThis.Error> => {
  try {
    const response = await globalThis.fetch('/api/genres');

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return <globalThis.Error>error;
  }
};

export { fetch };
