import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TokenAuthService } from '../../../services/token-auth.service';
interface IMenu {
  route: string;
  name: string;
  icon: string;
  children?: [];
}

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  // old code
  // payload : any = {}
  // user: string = ''
  userToken$!: Observable<string>;
  menuList$!: Observable<IMenu>;
  constructor(
    private _http: HttpClient,
    private _tokenAuth: TokenAuthService
  ) {}
  ngOnInit(): void {
    //old code
    // const token = sessionStorage.getItem('token')
    // if(token){
    //   this.payload = jwtDecode(token)
    //   this.user = this.payload.name
    // }
    this.userToken$ = this._tokenAuth.getToken();
    this.menuList$ = this._http.get<IMenu>('../../../../assets/menuItems.json');
  }
}
