import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable()
export class ApiCommunicationService {

  private baseUrl = '';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiServer;
  }

  private generateUrl(apiUrl: string) {
    return this.baseUrl + apiUrl;
  }

  public post(request: ApiCommunicationRequest) {
    return this.http.post(
      this.generateUrl(request.apiUrl),
      request.body,
    );
  }
  public get(request: ApiCommunicationRequest) {
    return this.http.get(
      this.generateUrl(request.apiUrl)
    );
  }

}

export interface ApiCommunicationRequest {
  apiUrl: string;
  body?: any;
}
