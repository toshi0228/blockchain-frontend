import axios from "axios";
import { jwt } from "helper";

export default class ServiceBase {
  /**
   *
   * @param endpoint
   * @param queries
   */
  public async guestGet<T>(endpoint: string, queries?: { [key in string]?: string }) {
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("GUEST GET:", url, queries);
    return await axios.get<T>(url);
  }

  /**
   *
   * @param endpoint
   * @param params
   * @param queries
   * @param headers
   */
  public async guestPost<T, U>(endpoint: string, params: U, queries?: { [key in string]: string }, headers?: any) {
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("GUEST POST:", url, params);
    return await axios.post<T>(url, params);
  }

  /**
   *
   * @param endpoint
   * @param queries
   */
  public async get<T>(endpoint: string, queries?: { [key in string]?: string }) {
    await jwt.getVerifiedKeys();
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("GET:", url, queries);
    return await axios.get<T>(url);
  }

  /**
   *
   * @param endpoint
   * @param params
   * @param queries
   */
  public async post<T, U>(endpoint: string, params: U, queries?: { [key in string]: string }) {
    await jwt.getVerifiedKeys();
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("POST:", url, params);
    return await axios.post<T>(url, params);
  }

  /**
   *
   * @param endpoint
   * @param params
   * @param queries
   */
  public async patch<T, U>(endpoint: string, params: U, queries?: { [key in string]: string }) {
    await jwt.getVerifiedKeys();
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("PATCH", url, params);
    return await axios.patch<T>(url, params);
  }

  /**
   *
   * @param endpoint
   * @param params
   * @param queries
   */
  public async put<T, U>(endpoint: string, params: U, queries?: { [key in string]: string }) {
    await jwt.getVerifiedKeys();
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("PUT", url, params);
    return await axios.put<T>(url, params);
  }

  /**
   *
   * @param endpoint
   * @param queries
   */
  public async delete<T>(endpoint: string, queries?: { [key in string]: string }) {
    await jwt.getVerifiedKeys();
    const url = queries ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}` : endpoint;
    console.info("DELETE", url, queries);
    return await axios.delete<T>(url);
  }

  /**
   * add query parameters to url
   * @param data
   */
  private static encodeQueryData(data: { [key in string]?: string }) {
    const ret = [];
    for (const d in data) {
      // クエリパラメータをsnakeケースにしたい場合は以下のコメントアウトを解除
      // const key = encodeURIComponent(ServiceBase.camelToUnderscore(d));
      const key = encodeURIComponent(d);
      const param = data[d];
      if (param) {
        const value = encodeURIComponent(param);
        ret.push(key + "=" + value);
      }
    }
    return ret.join("&");
  }

  /**
   * change naming convention camel to snake
   * @param key
   */
  private static camelToUnderscore(key: string) {
    return key.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
}
