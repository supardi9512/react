/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// horizontal layout
import DashboardLayout from 'Components/DashboardLayout';

// router service
import routerService from "../../services/_routerService";

class DashboardApp extends Component {
	render() {
		const { match, location } = this.props;
		if (location.pathname === '/dashboard') {
			return (<Redirect to={'/dashboard/dashboard/ecommerce'} />);
		}
		return (
			<DashboardLayout>
				{routerService && routerService.map((route,key)=>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
			</DashboardLayout>
		);
	}
}

export default withRouter(DashboardApp);
