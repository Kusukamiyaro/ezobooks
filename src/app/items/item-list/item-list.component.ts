import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { item } from '../interfaces';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
    items: Array<item> | any;
    constructor(
        private commonServive: CommonServiceService
    ) { }
    ngOnInit(): void {
        this.commonServive.getItemsResponse().subscribe({
            next: (data: any) => {
                data = JSON.parse(JSON.stringify(data));
                if (data.status === 'success') {
                    this.items = data.items;
                } else {
                    this.items = [];
                }
            },
            error: (error) => {
                if (error.status !== 200) {
                    alert('Due to some problem request cannot be processed');
                }
            }
        })

    }

}
