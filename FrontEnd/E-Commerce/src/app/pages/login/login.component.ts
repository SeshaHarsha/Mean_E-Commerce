import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { globalProperties } from '../../shared/globalProperties';
import { error } from 'console';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AngularMaterialModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[UserService, SnackbarService]
})
export class LoginComponent implements OnInit{
public loginForm: any = FormGroup;
responseMsg:any='';
payload:any;

constructor(private _userService:UserService, 
  private _formBuilder: FormBuilder, 
  private _snackbar:SnackbarService,
  private _router:Router
){}

ngOnInit(): void {
this.loginForm = this._formBuilder.group({
  email:['',[Validators.required, Validators.pattern(globalProperties.emailRegx)]],
  password:['', Validators.required]
})  
}

onLogin(){
  const data= this.loginForm.value
  this._userService.userLogin(data).subscribe({
    next:(res:any)=>{
      const token = res?.token
      sessionStorage.setItem('token', token)
      this.payload = jwtDecode(token)
      if(this.payload.role && this.payload.role === 'admin'){
        this._router.navigate(['/admin/dashboard']);
      } else {
        this._router.navigate(['/'])
      }
    }, error: (err:any) =>{
      if(err.error?.message){
        this.responseMsg = err.error?.message
      } else{
        this.responseMsg = globalProperties.genericError
      }
      this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
    }
  })
}

}
