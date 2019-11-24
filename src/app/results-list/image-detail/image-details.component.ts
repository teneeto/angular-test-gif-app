import { Component, Injectable, OnInit } from "@angular/core";
import { SearchService } from "../giphy-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: "../image-detail/image-detail.component.html"
})
export class ImageDetailsComponent implements OnInit {
    imageDetails;
    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.imageDetails = this.searchService.getItems(
            this.route.snapshot.params["id"]
        );
    }
    goBack() {
        this.router.navigate(['/images']);
    }
}
