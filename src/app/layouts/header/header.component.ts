import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "c-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(window).on("scroll", function (e) {
      if ($(window).scrollTop() > 50) {
        $("#header").addClass("header-active");
      } else {
        $(".header").removeClass("header-active");
      }
    });
    $('#menu-ico-btn').on('click', function(){
      if(!$('#menu-mobile').hasClass('open')){
        $(this).html('close')
        $('#menu-mobile').addClass('open')
      }else{
        $(this).html('menu')
        $('#menu-mobile').removeClass('open')
      }
    })
  }
}
