import { Injectable } from '@angular/core';
import { Config } from '../constants/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config: Config;

  constructor(private http: HttpClient) {
  }

  load(url: string) {
    return new Promise((resolve) => {
      const configSubscription = this.http.get(url)
        .subscribe(config => {
          this.config = <Config>config;
          resolve();
          configSubscription.unsubscribe();
        });
    });
  }

  get(): Config {
    return this.config;
  }
}
