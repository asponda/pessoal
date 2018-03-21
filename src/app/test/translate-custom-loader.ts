import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/of';

declare let readJSON: any;

export class TranslateCustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {

    if (lang === 'pt') {
      const pt = readJSON('assets/i18n/pt.json');
      return Observable.of(pt);
    }

    const en = readJSON('assets/i18n/en.json');
    return Observable.of(en);
  }
}
