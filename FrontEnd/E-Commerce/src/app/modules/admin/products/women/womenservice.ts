import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { productModel } from '../../../../shared/models/model';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WomenService {
  private _url = environment.apiUrl;
  private _http = inject(HttpClient);
  private formDataSubject = new BehaviorSubject<any>('');
  formData$ = this.formDataSubject.asObservable();
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  constructor() { }

  openDrawer() {
    this.isOpenSubject.next(true);
  }

  closeDrawer() {
    this.isOpenSubject.next(false);
  }

  setFormData(data: any) {
    this.formDataSubject.next(data)
    this.formData$.subscribe(res => {
      console.log("NEW formData$ : ", res)
    })
  }

  getProducts(): Observable<productModel[]> {
    return this._http.get<productModel[]>(`${this._url}/product/getAllProducts`).pipe(
      shareReplay()
    )
  }

  deleteProduct(pId: any) {
    return this._http.delete(`${this._url}/product/delete/${pId}`)
  }

}
