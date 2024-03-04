import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule, HttpClientModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
})
export class LoginComponent {
	loginObj: any = {
		userId: 0,
		emailId: '',
		fullName: '',
		password: '',
	};

	constructor(private http: HttpClient, private router: Router) {}

	// onLogin() {
	// 	this.http
	// 		.post(
	// 			'https://freeapi.miniprojectideas.com/api/Jira/Login',
	// 			this.loginObj
	// 		)
	// 		.subscribe((res: any) => {
	// 			debugger;
	// 			if (res.data) {
	// 				localStorage.setItem(
	// 					'jiraLoginDetails',
	// 					JSON.stringify(res.data)
	// 				);
	// 				this.router.navigateByUrl('/board');
	// 			} else {
	// 				alert(res.message);
	// 			}
	// 		});
	// }
	onLogin() {
		// Simulación de autenticación
		if (
			this.loginObj.emailId === 'example@example.com' &&
			this.loginObj.password === 'password'
		) {
			// Autenticación exitosa
			this.router.navigateByUrl('/board');
		} else {
			// Autenticación fallida
			alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
		}
	}
}
