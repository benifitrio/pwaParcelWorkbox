import standings from '../component/standing.js';
import teams from '../component/team.js';
import signin from '../component/signin.js';
import signup from '../component/signup.js';
import {default as Favorites} from '../component/favorite.js';

// #2 Load Navigator
const main =()=> {
    console.log("DOMContentLoaded");
    loadNavDekstop();
    function loadNavDekstop() {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status !== 200) return;

          // Muat daftar tautan menu
          const topnav =document.querySelector(".topnav");
          topnav.innerHTML = xhttp.responseText;

          // Daftarkan event listener untuk setiap tautan menu
          topnav.addEventListener("click", function(event) {
                // Muat konten halaman yang dipanggil
                page = event.target.getAttribute("href").substr(1);
                loadPage(page);
              });
        }
      };
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    }

    //nav mobile
    loadNavMobile();
    function loadNavMobile() {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status !== 200) return;

          // Muat daftar tautan menu
          const navMobile =document.querySelector("#view-mobile");
          navMobile.innerHTML = xhttp.responseText;

          // Daftarkan event listener untuk setiap tautan menu
          navMobile.addEventListener("click", function(event) {
                // Muat konten halaman yang dipanggil
                page = event.target.parentElement.getAttribute("href").substr(1);
                loadPage(page);
              });
        }
      };
      xhttp.open("GET", "navMobile.html", true);
      xhttp.send();
    }

    // Load page content
    let page = window.location.hash.substr(1);
    if (page === "") page = "home";

    loadPage(page);
    function loadPage(page) {
      if (page === "home") standings();
      if (page === "teams") teams();
      if (page === "favorites") Favorites();
      if (page === "signin") signin();
      if (page === "signup") signup();
    }

};

export default main;