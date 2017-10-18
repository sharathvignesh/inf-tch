import Auth from './Auth.js';



class UpdateAuth {
  static UrlCheck(url){ 
        const company_url = url;
        const formData = `company_url=${company_url}`;
        return(
        fetch('/api/company/checkurl', {
          method: "POST",
          body: formData,
          headers: new Headers({
                'Authorization': 'Bearer'+' '+Auth.getToken(),
                'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
              }),
        }).then(function(response) {
          if(response.status === 200){
            return response.json();
          }
          else if(response.status !== 200){
            return "error"
          }
          // response.status     //=> number 100–599
          // response.statusText //=> String
          // response.headers    //=> Headers
          // response.url        //=> String
         //  	return response.text()
        }, function(error) {
            this.setState({error_flag: true});
            console.log(error.message); //=> String
        }).then((body) => {
            return body;
          }));
}

    static UsernameCheck(username){ 
          const company_username = username;
          const formData = `company_username=${company_username}`;
          return(
          fetch('/api/company/checkusername', {
            method: "POST",
            body: formData,
            headers: new Headers({
                  'Authorization': 'Bearer'+' '+Auth.getToken(),
                  'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                }),
          }).then(function(response) {
            if(response.status === 200){
              return response.json();
            }
            else if(response.status !== 200){
              return "error"
            }
            // response.status     //=> number 100–599
            // response.statusText //=> String
            // response.headers    //=> Headers
            // response.url        //=> String
           //  	return response.text()
          }, function(error) {
              this.setState({error_flag: true});
              console.log(error.message); //=> String
          }).then((body) => {
              return body;
            }));
  }
  
  
}

export default UpdateAuth;

