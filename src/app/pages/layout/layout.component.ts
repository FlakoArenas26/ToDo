import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-layout',
	standalone: true,
	imports: [HttpClientModule, FormsModule, RouterOutlet, CommonModule],
	templateUrl: './layout.component.html',
	styleUrl: './layout.component.css',
})
export class LayoutComponent {
	projectList: any[] = [];
	userList: any[] = [];
	issueTypes: string[] = ['Ticket', 'Defect', 'RnD Work'];
	status: string[] = ['To Do', 'In Progress', 'Done'];

	ticketObj: any = {
		ticketId: 0,
		createdDate: '2023-08-18T05:58:41.065Z',
		summary: '',
		status: '',
		description: '',
		parentId: 0,
		storyPoint: 0,
		ticketGuid: '',
		assignedTo: 0,
		createdBy: 0,
		projectId: 0,
	};

	// constructor(private http: HttpClient, private master: MasterService) {
	// 	// Verificar si localStorage está definido antes de usarlo
	// 	if (typeof localStorage !== 'undefined') {
	// 		const loginData = localStorage.getItem('jiraLoginDetails');
	// 		if (loginData != null) {
	// 			const paserData = JSON.parse(loginData);
	// 			this.ticketObj.createdBy = paserData.userId;
	// 		}
	// 	} else {
	// 		// Manejo de la falta de localStorage
	// 		console.error('localStorage is not available.');
	// 	}
	// }
	constructor(private http: HttpClient, private master: MasterService) {
		// Establecer un valor predeterminado para createdBy
		this.ticketObj.createdBy = 0; // Cambia este valor según sea necesario
	}

	ngOnInit(): void {
		this.getAllProjects();
		this.getAllUsers();
	}
	setProject(obj: any) {
		debugger;
		this.master.onProjectChange.next(obj);
	}

	// getAllProjects() {
	// 	this.http
	// 		.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects')
	// 		.subscribe((res: any) => {
	// 			this.projectList = res.data;
	// 			debugger;
	// 			this.master.onProjectChange.next(this.projectList[0]);
	// 		});
	// }
	getAllProjects() {
		// Datos quemados en lugar de consumir una API
		this.projectList = [
			{ projectId: 1, projectName: 'Project 1' },
			{ projectId: 2, projectName: 'Project 2' },
			{ projectId: 3, projectName: 'Project 3' },
			// Agrega más datos según sea necesario
		];
		this.master.onProjectChange.next(this.projectList[0]);
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
			{ userId: 1, username: 'user1' },
			{ userId: 2, username: 'user2' },
			{ userId: 3, username: 'user3' },
			// Agrega más datos según sea necesario
		];
	}

	// onTicketCreate() {
	// 	this.http
	// 		.post(
	// 			'https://freeapi.miniprojectideas.com/api/Jira/CreateTicket',
	// 			this.ticketObj
	// 		)
	// 		.subscribe((res: any) => {
	// 			if (res.result) {
	// 				alert(res.message);
	// 				this.master.onTicketCreate.next(true);
	// 			} else {
	// 				alert(res.message);
	// 			}
	// 		});
	// }
	onTicketCreate() {
		// Aquí podrías implementar lógica adicional para el ticket creado
		alert('Ticket creado exitosamente');
		this.master.onTicketCreate.next(true);
	}
}
