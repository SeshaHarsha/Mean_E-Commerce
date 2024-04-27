import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { globalProperties } from '../../shared/globalProperties';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AngularMaterialModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers:[UserService, SnackbarService]
})
export class RegisterComponent {
  public registerForm:any = FormGroup;
  public responseMsg:string = '';

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder,
              private _router: Router,
              private _snackbar: SnackbarService
  ){}

  ngOnInit(){
    this.registerForm = this._formBuilder.group({
      name:['', [Validators.required, Validators.pattern(globalProperties.nameRegx)]],
      email:['', [Validators.required, Validators.pattern(globalProperties.emailRegx)]],
      password:['',[Validators.required]],
      phone:['', [Validators.required, Validators.pattern(globalProperties.phoneRegex)]],
      apartment: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      country: ['']
    })
  }

  onRegister(){
    const data= this.registerForm.value
    // this._userService.userRegister(data).subscribe((res:any) => {
    //   this.responseMsg = res?.message;
    //   console.log(this.responseMsg);
    //   this._router.navigate(['/login'])
    // }, (err:any) =>{
    //   if(err.error?.message){
    //     this.responseMsg = err.error?.message
    //   }else {
    //     this.responseMsg = globalProperties.genericError;
    //   }
    //   console.log("error", this.responseMsg);
    // })
    this._userService.userRegister(data).subscribe({
      next:(res:any) =>{
        this.responseMsg = res.message;
        this._snackbar.openSnackbar(this.responseMsg, 'success')
        this._router.navigate(['/login'])
      },
      error: (err: any) => {
        if(err.error?.message){
          this.responseMsg = err.error?.message
        }
        else{
          this.responseMsg = globalProperties.genericError
        }
        this._snackbar.openSnackbar(this.responseMsg, globalProperties.error)
      }
    })
  }
}
