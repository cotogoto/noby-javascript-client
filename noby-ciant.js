class NobyAPI {
  constructor(appKey) {
    this.endpoint = "https://app.cotogoto.ai/webapi/";
    this.appKey = appKey;
  }

  buildQuery(params) {
    return Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
  }

  async talk(text, options = {}) {
    const defaultOptions = {
      mail: null,
      pass: null,
      token: null,
      lat: null,
      lng: null,
      study: "1",
      persona: "0",
      ending: null,
    };

    const params = {
      appkey: this.appKey,
      text: text,
      ...defaultOptions,
      ...options,
    };

    const queryString = this.buildQuery(params);
    const response = await fetch(`${this.endpoint}/noby.json?${queryString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error("API request failed");
    }

    return await response.json();
  }
}
