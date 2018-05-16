import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHandler, HttpBackend, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { mockData } from '../../environments/mock';

@Injectable()
export class MockHttpClient extends HttpClient {

    private errorMock = {
      'body': {
        'codigo': '1',
        'mensagem': 'Teste de erro'
      },
      'statusCode': '503'
    };

    constructor(private httpHandler: HttpHandler) {
        super(httpHandler);
    }

    private getMock(url: string) {
      const response = mockData[url];
      return response;
    }

    private requestMock(url: string, body?: any, options?: any) {
      const retorno = new Subject<any>();

      // Simulate API call
      setTimeout(() => {
        const response = this.getMock(url);
        const error = response ? '' : this.errorMock;

        if (error) {
          console.log('Mock Error', url, body, options, error);
        } else {
          retorno.next(response);
        }
      }, 2000);

      return retorno;
    }

    get(url: string, options?: any): Observable<any> {
      console.log('Mock Http GET...');
      return this.requestMock(url, null, options);
    }

    post(url: string, body: any, options?: any): Observable<any> {
      console.log('Mock Http POST...');
      return this.requestMock(url, body, options);
    }

    put(url: string, body: any, options?: any): Observable<any> {
      console.log('Mock Http PUT...');
      return this.requestMock(url, body, options);
    }

    delete(url: string, body: any, options?: any): Observable<any> {
      console.log('Mock Http DELETE...');
      return this.requestMock(url, body, options);
    }
}
