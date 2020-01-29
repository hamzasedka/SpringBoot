import { Component, OnInit } from '@angular/core';
import { AuthService } from '@dom/infra/auth';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string | null;

  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.buildFormlogin();
  }

  buildFormlogin() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  async submit() {
    await this.authService
      .login(this.form.value).toPromise()
      .then(user => {
        if (!!user) {
          this.router.navigate(['/subscribe']);
        }
      })
      .catch(error => {
        if (!!error && error.code) {
          switch (error.code) {
            case 'auth/user-not-found':
              this.error = `Aucun enregistrement utilisateur ne correspond à cet identifiant. L'utilisateur a peut-être été supprimé.`;
              break;
            default:
              this.error = `Erreur de connexion :( !!`;
              break;
          }
        }
      });
  }
}
