import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
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

    get(url: string, options?: any): Observable<any> {
      console.log('Mock Http POST...');

      const retorno = new Subject<any>();

      // Simulate API call
      setTimeout(() => {
        const response = this.getMock(url);
        const error = response ? '' : this.errorMock;

        if (error) {
          console.log('Router Error', url, options, error);
        } else {
          retorno.next(response);
        }
      }, 2000);

      return retorno;
    }

    post(url: string, body: any, options?: any): Observable<any> {
      console.log('Mock Http POST...');

      const retorno = new Subject<any>();

      // Simulate API call
      setTimeout(() => {
        const response = this.getMock(url);
        const error = response ? '' : this.errorMock;

        if (error) {
          console.log('Router Error', url, body, options, error);
        } else {
          retorno.next(response);
        }
      }, 2000);

      return retorno;
    }
}
