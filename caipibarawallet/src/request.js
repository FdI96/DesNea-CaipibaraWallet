import axios from 'axios';

export default function axiosRequest(url, option) {
    return axios({
        url: url,
        method: option.method,
        headers: option.headers,
        data: option.body
      })
        .then(checkStatus)
        .then(async response => {
    
          return response; //.json();
        })
        .catch(function(e) {
          const status = e.response ? e.response.status : null;
          console.error('URL >>> ', url);
          console.error('Error > ', e.response);
    
          
          if (status === 403) {
            window.alert(
              'Error en la solicitud',
              'No tiene permisos para esa acción',
              [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
    
            return;
          }
    
          let message = 'Ocurrió un error en la solicitud.';
    
          if (e.response && e.response.data) {
            if (e.response.data.message) {
              message = e.response.data.message;
            }
          } else if (e.message) {
            message = e.message;
          }
    
          if (isDevelop) {
            window.alert(
              'Request Error',
              e.response ? JSON.stringify(e.response) : JSON.stringify(message),
              [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );
          }
          throw e.response ? e.response : e;
        });
}