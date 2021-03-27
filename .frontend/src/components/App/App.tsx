import React, { useCallback, useEffect, useState } from "react";
import {FC, useMemo} from "react";
import {Helmet} from "react-helmet";
import {IHydrateData} from "~interfaces/hydrateData";
import {r} from "~utils/render";
import styled, {createGlobalStyle} from "styled-components";
import {getHydrateData} from "~utils/hydrateData";
import {PageStore, usePageStoreGet} from "~src/PageStore";
import {App, useAppGet} from "~src/App";
import {Router} from "~utils/Router";
import {safe} from "~utils/safe";
import {Layout} from "~components/Layout/Layout"; 
import { Tabs } from 'antd';  
import { useDispatch, useSelector } from "react-redux"; 
 
export const AppContainer: FC<{hydrateData?: IHydrateData}> = ({hydrateData}) => { 
	 
	/* 
    const dispatch = useDispatch();
    const info = useSelector(state => state.order)
	    
    const handleLoadData = useCallback(() => {   
        dispatch({type : "ORDER_LOAD"})
        },[dispatch]
    ) */
	
		safe(() => {
			const metaList = ['keywords', 'description'];
			for (const metaName of metaList) {
				const el = document.querySelector(`meta[name="${metaName}"]`);
				if (!el) continue;
				el.setAttribute('data-react-helmet', 'true');
			}
		});

		hydrateData = hydrateData || getHydrateData();
		const app = new App(hydrateData);
		const router = app.router;
		const pageStore = app.pageStore;
		safe(() => {
			(window as any).__app = app;
		});

		const {Provider: PageStoreProvider} = PageStore.context;
		const {Provider: AppProvider} = App.context;
		const {Provider: RouterProvider} = Router.context;

		const { TabPane } = Tabs; 
		  
		//<AppLoading />  
		return (
			<RouterProvider value={router}>
				<PageStoreProvider value={pageStore}>
					<AppProvider value={app}>
						<AppHelmet />
						<GlobalStyle />
						<Layout>
							<AppContent />
						</Layout>
					</AppProvider>
				</PageStoreProvider>
			</RouterProvider>
		);
}

export const AppHelmet: FC = () => {
	const title = usePageStoreGet('page:title') || '';
	const meta = usePageStoreGet('page:meta') || [];

	return useMemo(() => {
		const $metaList = meta
			.filter(_meta => !!_meta.name)
			.map((_meta, index) => (
				<meta
					key={index}
					name={_meta.name}
					content={_meta.value || ''}
				/>
			));

		return (
			<Helmet>
				<title>{title}</title>
				{$metaList}
			</Helmet>
		);
	}, [title, JSON.stringify(meta)]);
}

export const AppLoading: FC = () => {
	const pageLoading = !!useAppGet('loadingPage');
	return useMemo(() => { 
		return <AppLoadingElement Loading={pageLoading} />;
	}, [pageLoading])
}

export const AppContent: FC = () => { 
	const url = usePageStoreGet('url');
	const content = usePageStoreGet('page:content');
	const title = usePageStoreGet('page:title') || '';
	const meta = usePageStoreGet('page:meta') || [];
	
    const dispatch = useDispatch();
    const info = useSelector(state => state.order)
	    
    const handleLoadData = useCallback(() => {   
        dispatch({type : "ORDER_LOAD"})
        },[dispatch]
    ) 
	 
	//return useMemo(() => {
		 
		const { TabPane } = Tabs;
		let classNames = "col-12";
		 
		if (title == 'React with bitrix') {
			
		return (
			<React.Fragment>
							<Tabs onChange={handleLoadData} 
                      renderTabBar={(props, DefaultTabBar) => (
                        <DefaultTabBar {...props}>
                          {node => ( 
                              <button className="btn btn-primary my-5"> 
                              {
                                React.cloneElement( node, {
                                        className: `${ node.props.className } error`
                                    }) 
                                }
                              </button> 
                          )}
                        </DefaultTabBar>
                      )}> 
        <TabPane tab="NEW" key="1">
             {info.order_new ? info.order_new.map(item => {
                return <div className="card" key={item.ID}>  
					<div class="card-header">
						{item.TITLE}
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">{item.OPPORTUNITY}</li>
						<li class="list-group-item">{item.CURRENCY_ID}</li> 
					</ul>				 
                </div>
            }) : ' '}
        </TabPane>
        <TabPane tab="FINAL_INVOICE" key="2" >
            {info.order_final ? info.order_final.map(item => {
                return <div className="card" key={item.ID}>  
					<div class="card-header">
						{item.TITLE}
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">{item.OPPORTUNITY}</li>
						<li class="list-group-item">{item.CURRENCY_ID}</li> 
					</ul>				 
                </div>
            }) : ' '}
        </TabPane>
        <TabPane tab="WON" key="3" >
            {info.order_won ? info.order_won.map(item => {
                return <div className="card" key={item.ID}>  
					<div class="card-header">
						{item.TITLE}
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">{item.OPPORTUNITY}</li>
						<li class="list-group-item">{item.CURRENCY_ID}</li> 
					</ul>				 
                </div>
            }) : ' '}
        </TabPane>
      </Tabs> 
			</React.Fragment>
		);
		
		} else {
		
		return (
			<React.Fragment>
				{r(content)}
			</React.Fragment>
		);
		
		}
	//}, [content, info]);
}

const GlobalStyle = createGlobalStyle`
	*,
	*:after,
	*:before {
		box-sizing: border-box;
		outline: none;
	}
	html,
	body,
	#root {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	body,
	#root {
		min-height: 100%;
		flex-grow: 1;
		flex-shrink: 1;
	}
	html,
	body {
		margin: 0;
		padding: 0;
	}
	html {
		flex-grow: 0;
		flex-shrink: 0;
		height: 100%;
		font-size: 1px;
		line-height: 1.2;
		font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
		cursor: default;
	}
	body {
		font-size: 16rem;
	}
	a {
		color: #0A3A68;
	}
	a,
	button,
	input[type="button"],
	input[type="submit"] {
		cursor: pointer;
		user-select: none;
	}
	p a {
		user-select: auto;
	}
`;

export const AppLoadingElement = styled.div<{Loading: boolean}>`
	position: absolute;
	top: calc(50% - 5.5em);
	left: calc(50% - 5.5em);
	z-index: 99999;
	pointer-events: none;

	font-size: 10px;
	text-indent: 0;
	color: transparent;
	overflow: hidden;
	width: 11em;
	height: 11em;
	border-radius: 50%;
	background: #0a3a68;
	background: linear-gradient(to right, #0a3a68 10%, rgba(10,58,104, 0) 42%);
	animation: load3 1.4s infinite linear;
	transform: translateZ(0);

	transition: ease-in opacity ${(props) => props.Loading ? '1s' : '0.05s'};

	opacity: ${(props) => props.Loading ? '1' : '0'};
	animation-play-state: ${(props) => props.Loading ? 'running' : 'paused'};
	&:before {
		width: 50%;
		height: 50%;
		background: #0a3a68;
		border-radius: 100% 0 0 0;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
	}
	&:after {
		background: #ffffff;
		width: 75%;
		height: 75%;
		border-radius: 50%;
		content: '';
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	@keyframes load3 {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;