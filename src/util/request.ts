export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function request<T>(url: RequestInfo): Promise<HttpResponse<T>> {
  let response: HttpResponse<T> = await fetch(url);
  response.parsedBody = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
