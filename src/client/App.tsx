import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './navbar';
import Posts from './posts';
import Apost from './apost';
import Authors from './authors';
import Anauthor from './anauthor';
import Tags from './tags';
import Panel from './panel';
import Login from './Login';
import Atag from './atag';

const App = (props: AppProps) => {
	

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path={'/posts'}>
					<Posts />
				</Route>
				<Route exact path={'/post/:id'}>
					<Apost />
				</Route>
				<Route exact path={'/authors'}>
					<Authors />
				</Route>
				<Route exact path={'/authors/:id'}>
					<Anauthor />
				</Route>
				<Route exact path={'/tags'}>
					<Tags />
				</Route>
				<Route exact path ={'/tags/:id'}>
					<Atag />
				</Route>
				<Route exact path={'/panel'}>
					<Panel />
				</Route>
				<Route exact path={'/login'}>
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
