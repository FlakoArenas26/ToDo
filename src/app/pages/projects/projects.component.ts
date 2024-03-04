import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [HttpClientModule, FormsModule, BrowserModule],
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.css',
})
export class ProjectsComponent {
	projectList: any[] = [];
	projectObj: any = {
		projectId: 0,
		projectName: '',
		shortName: '',
		createdDate: new Date(),
	};

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.getAllProjects();
	}

	// getAllProjects() {
	// 	this.http
	// 		.get('https://freeapi.miniprojectideas.com/api/Jira/GetAllProjects')
	// 		.subscribe((res: any) => {
	// 			this.projectList = res.data;
	// 		});
	// }
	getAllProjects() {
		// Datos quemados en lugar de consumir una API
		this.projectList = [
			{
				projectId: 1,
				projectName: 'Project 1',
				shortName: 'P1',
				createdDate: new Date(),
			},
			{
				projectId: 2,
				projectName: 'Project 2',
				shortName: 'P2',
				createdDate: new Date(),
			},
			{
				projectId: 3,
				projectName: 'Project 3',
				shortName: 'P3',
				createdDate: new Date(),
			},
			// Agrega más datos según sea necesario
		];
	}
	// onSave() {
	// 	this.http
	// 		.post(
	// 			'https://freeapi.miniprojectideas.com/api/Jira/CreateProject',
	// 			this.projectObj
	// 		)
	// 		.subscribe((res: any) => {
	// 			if (res.result) {
	// 				alert(res.message);
	// 				this.getAllProjects();
	// 			} else {
	// 				alert(res.message);
	// 			}
	// 		});
	// }
	onSave() {
		// Aquí podrías implementar lógica adicional para guardar el proyecto
		alert('Proyecto creado exitosamente');
		this.getAllProjects();
	}
}
