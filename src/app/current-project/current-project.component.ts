import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { ServiceAPIService } from "../service-api.service";

@Component({
  selector: "app-current-project",
  templateUrl: "./current-project.component.html",
  styleUrls: ["./current-project.component.css"]
})
export class CurrentProjectComponent implements OnInit {
  project: Project[];
  constructor(private service: ServiceAPIService) {}

  ngOnInit() {
    this.service.getProjects().subscribe(resp => (this.project = resp));
  }
}
