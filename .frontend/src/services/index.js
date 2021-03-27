import axios from "../plugins/axios";

export const getStatusList = async () => {
    try {
        const data = await axios.get(`https://uttest.bitrix24.com/rest/1/mxd5fcd4x0ijzegt/crm.status.list`);
        //console.log(data)
        return data;
    } catch (error) {
        throw error;
    }
};


export const getDealList = async () => {
    try {
        const data = await axios.get(`https://uttest.bitrix24.com/rest/1/mxd5fcd4x0ijzegt/crm.deal.list`);
        return data.data.result;
    } catch (error) {
        throw error;
    }

};