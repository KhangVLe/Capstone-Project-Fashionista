import { Component, OnInit, Input } from "@angular/core";
import * as jsPDF from "jspdf";
// Services
import { OrderService } from "src/app/services/order.service";
import { AuthService } from "src/app/services/auth.service";
// Models
import { User } from "src/app/models/User";
import { Order } from "src/app/models/Order";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.css"]
})
export class OrderFormComponent implements OnInit {
  @Input() user: User;
  display: string = "none";
  modalHeader: string = "";
  modalBody: string = "";

  constructor(private orderService: OrderService, private authService: AuthService) {}

  ngOnInit() {
  }
  
  // modal
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onError() {
    this.modalHeader = "An Error Has Occurred";
    this.modalBody = "Could not proccess your order do to server communication problem. Please try again later.";
    this.openModal();
  }
}
