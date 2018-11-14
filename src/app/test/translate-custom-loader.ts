import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';


declare let readJSON: any;

export class TranslateCustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {

    if (lang === 'pt') {
      const pt = readJSON('assets/i18n/pt.json');
      return of(pt);
    }

    const en = readJSON('assets/i18n/en.json');
    return of(en);
  }
}
