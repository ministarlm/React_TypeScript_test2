abstract class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  protected url(url: string): string {
    return `${this.baseUrl}${url}`;
  }

  protected buildUrlParams(obj: any) {
    const params = new URLSearchParams();

    for (const key in obj) {
      const param = obj[key];

      if (param !== "" && param !== undefined) {
        params.append(key, param);
      }
    }

    return params;
  }
}

export default HttpClient;
