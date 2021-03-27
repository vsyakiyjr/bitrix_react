import React, { useCallback, useEffect } from "react";
import "./TabsPage.css";
import {  Tabs, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";

export function TabsPage() {
  return (
    <div  className="tabs-page" >
    </div>
  );
	/*
    const dispatch = useDispatch();
    const info = useSelector(state => state.order)
    const { TabPane } = Tabs;
    const tabPosition= 'left';

    const handleLoadData = useCallback(() => {
        dispatch({type : "ORDER_LOAD"})
        },[dispatch]
    )
   useEffect(() => {
         }, [dispatch, info])
		 
		 
  return (
    <div  className="tabs-page" >
      <Space style={{ marginBottom: 24 }}>
      <Tabs tabPosition={tabPosition} onChange={handleLoadData}>
        <TabPane tab="NEW" key="1" >
             {info.order_new ? info.order_new.map(item => {
                 return <ul key={item.ID}>
                            <li>ID: {item.ID}</li>
                            <li>TITLE: {item.TITLE}</li>
                            <li>TYPE_ID: {item.TYPE_ID}</li>
                            <li>CURRENCY_ID: {item.CURRENCY_ID}</li>
                            <li>OPPORTUNITY: {item.OPPORTUNITY}</li>
                        </ul>
             }) : ' '}
        </TabPane>
        <TabPane tab="FINAL_INVOICE" key="2" >
            {info.order_final ? info.order_final.map(item => {
                return <ul key={item.ID}>
                    <li>ID: {item.ID}</li>
                    <li>TITLE: {item.TITLE}</li>
                    <li>TYPE_ID: {item.TYPE_ID}</li>
                    <li>CURRENCY_ID: {item.CURRENCY_ID}</li>
                    <li>OPPORTUNITY: {item.OPPORTUNITY}</li>
                </ul>}) : ' '}
        </TabPane>
        <TabPane tab="WON" key="3" >
            {info.order_won ? info.order_won.map(item => {
                return <ul key={item.ID}>
                    <li>ID: {item.ID}</li>
                    <li>TITLE: {item.TITLE}</li>
                    <li>TYPE_ID: {item.TYPE_ID}</li>
                    <li>CURRENCY_ID: {item.CURRENCY_ID}</li>
                    <li>OPPORTUNITY: {item.OPPORTUNITY}</li>
                </ul>
            }) : ' '}
        </TabPane>
      </Tabs>
      </Space>
    </div>
  );*/
}
