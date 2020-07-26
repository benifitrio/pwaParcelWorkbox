//register for service worker
//push notification
console.log('start register service worker and push notification.');

export default function regSW(){
  const applicationServerPublicKey = 'BOge5cYtaGoolBmw69Jrai9LIOvJuvcXzSHddFWWU_rCc_2h-Eh-xem6l3ssKQMvr3X_wvAAZekemHV8xixXLT0';
  const pushButton = document.querySelector('.js-push-btn');
  let isSubscribed = false;
  let swRegistration = null;

  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, ' /');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  //Menginisialisasi Status
  function initialiseUI() {
    pushButton.addEventListener('click', function() {
      pushButton.disabled = true;
      console.log(isSubscribed)
      if (isSubscribed) {
        // TODO: Unsubscribe user
        alert('Anda tidak subcribed');
        unsubscribeUser();
      } else {
        subscribeUser();
      }

    });

    // Set the initial subscription value
    // console.log(swRegistration)
    swRegistration.pushManager.getSubscription()
    .then(function(subscription) {

      let data = JSON.stringify(subscription);
      console.log(data);
      isSubscribed = !(subscription === null);
      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }
      updateBtn();

    });
  }

  function updateBtn() {
  //jika user not allow notif
    if (Notification.permission === 'denied') {
      pushButton.textContent = 'Notifikasi diBlock.';
      alert('Anda block notifikasi')
      pushButton.disabled = true;
      return;
    }
    if (isSubscribed) {
        pushButton.textContent = 'Nonaktifkan Notifikasi';
    } else {
        pushButton.textContent = 'Aktifkan Notifikasi';
    }
    pushButton.disabled = false;
  }

  function subscribeUser() {
    const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
      swRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey
    })
    .then(function(subscription) {
      console.log('User is subscribed:', subscription);
      console.log(subscription)

      isSubscribed = true;
      updateBtn();
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
      updateBtn();
    });

  };

  //unscriber user
  function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      console.log(subscription)
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function(error) {
      console.log('Error unsubscribing', error);
    })
    .then(function() {

      console.log('User is unsubscribed.');
      isSubscribed = false;
      updateBtn();
    });

  };

  if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');

      navigator.serviceWorker.register('/service-worker.js')
      .then(function(swReg) {
        console.log('Service Worker is registered', swReg);

        swRegistration = swReg;
        initialiseUI();
      })
      .catch(function(error) {
        console.error('Service Worker Error', error);
      })

  } else {
      console.warn('Push messaging is not supported');
      pushButton.textContent = 'Push Not Supported';
  }

};

