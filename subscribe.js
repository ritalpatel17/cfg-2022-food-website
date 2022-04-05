 body onLoad="redirect()"

script language="JavaScript"

function redirect() 

      var email = "xyz@something.com"
      var mailto_link = 'mailto:' + email
      window = window.open(mailto_link, 'emailWindow')
      if (window && window.open && !window.closed)         
          window.close()
