import React from "react"
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <script>
          var helpjuice_account_url = "https://sp-test.helpjuice.com";
        </script>
        <script src="https://s3.amazonaws.com/assets.helpjuice.com/helpjuice.min.js">
        </script>
      </Helmet>
      <div id="helpjuice_js_widget_content">
        <img src='https://helpjuice.com/images/cube-theme/loading.gif' class="helpjuice-loading-spinner" />
      </div>
    </>
  )
}

export default Index;

