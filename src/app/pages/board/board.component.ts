import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-board',
	standalone: true,
	imports: [HttpClientModule, CommonModule],
	templateUrl: './board.component.html',
	styleUrl: './board.component.css',
})
export class BoardComponent {
	ticketsArray: any[] = [];
	selectedProjectData: any;
	status: string[] = ['Por Hacer', 'En Progreso', 'Hecho'];

	constructor() {
		// Llamada a la función getProjectTickets para inicializar los datos de los tickets
		this.getProjectTickets(1); // Puedes pasar el ID del proyecto según sea necesario
	}

	// getProjectTickets(id: number) {
	// 	this.http
	// 		.get(
	// 			'https://freeapi.miniprojectideas.com/api/Jira/GetTicketsByProjectId?projectid=' +
	// 				id
	// 		)
	// 		.subscribe((res: any) => {
	// 			this.ticketsArray = res.data;
	// 		});
	// }
	getProjectTickets(projectId: number) {
		// Datos quemados en lugar de consumir una API
		const ticketsData = [
			{
				id: 1,
				summary: 'Resolver problema de conexión',
				assignedTo: 'Juan Pérez',
				status: 'Por Hacer',
			},
			{
				id: 2,
				summary: 'Actualizar página de inicio',
				assignedTo: 'María González',
				status: 'En Progreso',
			},
			{
				id: 3,
				summary: 'Revisar errores de validación',
				assignedTo: 'Carlos Ruiz',
				status: 'Hecho',
			},
			// Agrega más datos según sea necesario
		];

		// Filtrar los tickets por proyecto y establecer en ticketsArray
		this.ticketsArray = ticketsData.filter((ticket) =>
			this.status.includes(ticket.status)
		);
	}

	filterTicket(status: string) {
		return this.ticketsArray.filter((m) => m.status == status);
	}
}
