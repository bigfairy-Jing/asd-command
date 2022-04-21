import got, { OptionsOfTextResponseBody } from "got";

// GET, HEAD, POST, PUT, DELETE.

enum HttpMethod {
  get = "GET",
  post = "POST",
  put = "PUT",
  patch = "PATCH",
  head = "HEAD",
  delete = "DELETE",
  options = "OPTIONS",
  trace = "TRACE",
}

export default class GotFetch {
  static initOptions(options = {}, method: HttpMethod, headers = {}) {
    return {
      ...options,
      method,
      headers: {
        ...headers,
      },
    };
  }

  static async post(url: string, body: any, ParamOptions = {}, headers = {}) {
    const options: OptionsOfTextResponseBody = this.initOptions(
      ParamOptions,
      HttpMethod.post,
      headers
    );
    options.form = body;
    try {
      const res = await got(url, options);
      return {
        error: null,
        code: 0,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        body: res.body,
        response: res.body,
      };
    } catch (error) {
      return {
        code: -1,
        error,
      };
    }
  }

  static async jsonPost(
    url: string,
    body: any,
    ParamOptions = {},
    headers = {}
  ) {
    const options: OptionsOfTextResponseBody = this.initOptions(
      ParamOptions,
      HttpMethod.post,
      headers
    );
    options.json = body;
    try {
      const res = await got(url, options);
      return {
        error: null,
        code: 0,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        body: res.body,
        response: res.body,
      };
    } catch (error) {
      return {
        code: -1,
        error,
      };
    }
  }

  static async get(url: string, query = {}, ParamOptions = {}, headers = {}) {
    const options: OptionsOfTextResponseBody = this.initOptions(
      ParamOptions,
      HttpMethod.get,
      headers
    );
    options.json = ParamOptions;
    try {
      const res = await got(url, options);
      return {
        error: null,
        code: 0,
        statusCode: res.statusCode,
        statusMessage: res.statusMessage,
        body: res.body,
        response: res.body,
      };
    } catch (error) {
      return {
        code: -1,
        error,
      };
    }
  }
}
