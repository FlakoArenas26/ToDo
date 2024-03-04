import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-users',
	standalone: true,
	imports: [HttpClientModule, FormsModule, CommonModule],
	templateUrl: './users.component.html',
	styleUrl: './users.component.css',
})
export class UsersComponent {
	userList: any[] = [];
	userObj: any = {
		userId: 0,
		emailId: 'string',
		fullName: 'string',
		password: 'string',
	};

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getAllUsers();
	}

	// getAllUsers() {
	// 	this.http
	// 		.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllUsers')
	// 		.subscribe((res: any) => {
	// 			this.userList = res.data;
	// 		});
	// }
	getAllUsers() {
		// Datos quemados en lugar de consumir una API
		this.userList = [
			{
				userId: 1,
				emailId: 'user1@example.com',
				fullName: 'User 1',
				password: 'password1',
			},
			{
				userId: 2,
				emailId: 'user2@example.com',
				fullName: 'User 2',
				password: 'password2',
			},
			{
				userId: 3,
				emailId: 'user3@example.com',
				fullName: 'User 3',
				password: 'password3',
			},
			// Agrega más datos según sea necesario
		];
	}
	// onSave() {
	// 	this.http
	// 		.post(
	// 			'https://freeapi.miniprojectideas.com/api/Jira/CreateUser',
	// 			this.userObj
	// 		)
	// 		.subscribe((res: any) => {
	// 			if (res.result) {
	// 				alert(res.message);
	// 				this.getAllUsers();
	// 			} else {
	// 				alert(res.message);
	// 			}
	// 		});
	// }
	onSave() {
		// Aquí podrías implementar lógica adicional para guardar el usuario
		alert('Usuario creado exitosamente');
		this.getAllUsers();
	}
}
