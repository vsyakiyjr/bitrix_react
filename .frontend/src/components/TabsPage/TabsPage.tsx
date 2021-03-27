import * as React from 'react';
import { Tabs, Space } from 'antd';  
import { useDispatch, useSelector } from "react-redux";

class App extends React.Component {
  render() {
    return (
		<div>
			dfsdf
		</div>
	);
  }
}
 
export const TabsPage: IComponent = () => {
    const { TabPane } = Tabs;
    let classNames = "btn btn-primary my-2";
	
	return (     
		<div className="container"> 
            <div className="col-md-4">
                 
            </div>
            <div className="col-md-8">
                 
            </div> 
			
		<App />	
		 
		<Tabs className="row">
        <TabPane className={classNames} tab="NEW" key="1" >
 
        </TabPane>
        <TabPane className={classNames} tab="FINAL_INVOICE" key="2" >
      22222222222222 
        </TabPane>
        <TabPane className={classNames} tab="WON" key="3" >
       33333333333
        </TabPane>
      </Tabs>
		</div>
	);
}