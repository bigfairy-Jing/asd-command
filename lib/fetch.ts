import got, { OptionsOfTextResponseBody } from 'got';

// GET, HEAD, POST, PUT, DELETE.

enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  head = 'HEAD',
  delete = 'DELETE',
  options = 'OPTIONS',
  trace = 'TRACE',
}

type Body = {
  [key: string]: unknown;
};

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

  static async post(url: string, body: Body, ParamOptions = {}, headers = {}) {
    const options: OptionsOfTextResponseBody = this.initOptions(
      ParamOptions,
      HttpMethod.post,
      headers
    );
    options.form = body;
    try {
      const res = await got(url, options);
      return {
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

  static async jsonPost(url: string, body: Body, ParamOptions = {}, headers = {}) {
    const options: OptionsOfTextResponseBody = this.initOptions(
      ParamOptions,
      HttpMethod.post,
      headers
    );
    options.json = body;
    try {
      const res = await got(url, options);
      return {
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

  static async get(url: string, isJson: boolean = false) {
    try {
      const res = isJson ? await got(url).json() : await got(url);
      // 这里可能涉及不同的接口，所以这里把处理方式放到对应的command
      return {
        code: 0,
        res,
      };
    } catch (error) {
      return {
        code: -1,
        error,
      };
    }
  }
}
