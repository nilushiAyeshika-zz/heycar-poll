import React, { FC } from 'react';
// import { ToastContainer } from 'react-toastify'

import Grid from '../../../components/Layout/Grid/Grid.component';
import RouteConfig from '../../../routeConfig/RouteConfig'

// import 'react-toastify/dist/ReactToastify.css'

const Main: FC = () => {

  return (
    <Grid>
      <RouteConfig data-test="route-config-component" />
      {/* <ToastContainer data-test="toast-component" /> */}
    </Grid>
  )
}

export default Main;
