import {showLoader, hideLoader} from './preloader.js';
import dbPromise from './db.js';

export default function favorites(){
    const Content = document.getElementById('Content');
    const title = document.getElementById('headerTitle');
    let _dataTeams =null;

    let loadFavoriteTeams = () => {
      showLoader();
      const html = `
          <a class="waves-effect waves-light btn-small red" id="deleteAll">Kosongkan tim favorit</a>
          <div class="row" style="margin-top: 16px;">
            <div id="listFavoriteTeamElement"></div>
          </div>
        `;
      Content.innerHTML = html;
      title.innerHTML = "My Favorites Teams";
      document.getElementById('deleteAll').addEventListener('click', ()=>{
          deletesAllFavoriteTeam();
      })
      renderFavoriteList(); // render favorited teams
      hideLoader();

    };

    function renderFavoriteList() {
      dbPromise.then(db=>{
        const tx = db.transaction("teams", "readwrite").objectStore("teams");
        return tx.getAll() || [];
      })
      .then(team=>{
        _dataTeams = team;
        const listFavorite = document.getElementById('listFavoriteTeamElement');
        if (team.length) {
         let _Favotite = '';
         team.forEach(team => {
                 _Favotite +=
                    `<div class="col s12 m6 l6">
                      <div class="card" id="card-${team.id}" style="height:21rem;">
                        <div class="card-image">
                          <img src="${team.crestUrl}" style="padding: 16px; margin: auto; width: 6rem">
                          <a class="btn-floating btn-medium halfway-fab waves-effect waves-light red removeFavorite" data-id="${team.id}">
                            <i id="card-${team.id}" class="large material-icons">delete</i>
                          </a>
                        </div>
                        <div class="card-content">
                          <div class="center flow-text"><strong>${team.name}</strong></div>
                          <div class="center"><strong>Founded:</strong> ${team.founded}</div>
                          <div class="center"><strong>Venue: </strong>${team.venue}</div>
                          <div class="center"><a href="${team.website}" target="_blank"><strong>Website : </strong>${team.website}</a></div>
                        </div>
                      </div>
                    </div>`;
                  listFavorite.innerHTML=_Favotite;
                  const removeFavorite= document.querySelectorAll('.removeFavorite');
                  removeFavorite.forEach(el=>{
                    el.addEventListener('click',e=>{
                      let getId = e.target.parentElement.dataset.id;
                      removeFavoriteTeam(getId);
                    })
                  })
              })
        }else {
          listFavorite.innerHTML =
            '<h5 class="center-align">You have no favorite team! get one !</h5>';
        }
        hideLoader();
        })

    };

    //<==delete one favorite==>
    function removeFavoriteTeam(teamId) {
        let teamObject = _dataTeams.filter(el => el.id == teamId)[0];
        dbPromise.then(db=>{
          let tx = db.transaction("teams", "readwrite");
          let store = tx.objectStore("teams").delete(parseInt(teamId));
        }).then(()=>{
            let element = document.getElementById(`card-${teamId}`);
            element.parentNode.removeChild(element);
            swal({
              title: "succes!",
              text: `berhasil menghapus ${teamObject.name} dari Team Favorit.`,
              icon: "success",
              button: "Ok!",
            });
          }).catch((e)=>{
              console.error("gagal dihapus", e);
              swal({
                title: "kesalahan!, cek jaringan anda.",
                icon:error
              });
          })
    };

    //delete allFavorites
    function deletesAllFavoriteTeam() {
      dbPromise.then(db=>{
        const tx = db.transaction("teams", "readwrite");
        const store = tx.objectStore("teams").clear();
        return store;
      })
      .then(()=>{
        loadFavoriteTeams();
        swal({
          title: "Are you sure?",
          text: "data yang dihapus, tidak dapat di kembalikan.",
          icon: "warning",
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your favorites has been deleted!", {
              icon: "success",
            });
          }
        });
      })

    };

  loadFavoriteTeams();
};

