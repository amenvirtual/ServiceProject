import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "./project";
import { Sponsor } from "./sponsor";

@Injectable({
  providedIn: "root"
})
export class ServiceAPIService {
  baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    console.log("service invoked");
    return this.http.get<Project[]>(this.baseUrl + "project");
  }

  getSponsors(): Observable<Sponsor[]> {
    console.log("sponsor service invoked");
    return this.http.get<Sponsor[]>(this.baseUrl + "sponsor");
  }
}
