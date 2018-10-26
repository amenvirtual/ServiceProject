import { Component, OnInit } from "@angular/core";
import { Sponsor } from "../sponsor";
import { ServiceAPIService } from "../service-api.service";

@Component({
  selector: "app-show-sponsor",
  templateUrl: "./show-sponsor.component.html",
  styleUrls: ["./show-sponsor.component.css"]
})
export class ShowSponsorComponent implements OnInit {
  sponsor: Sponsor[];
  constructor(private service: ServiceAPIService) {}

  ngOnInit() {
    this.service.getSponsors().subscribe(resp => (this.sponsor = resp));
  }
}
