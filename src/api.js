import {post} from './utils/requests';

const baseApiUrl = "http://localhost:8000/api/v1";

const DiscountApi = {
    getDiscount: (serial) => {
        return post(`${baseApiUrl}/serialnumbers/discount/`, {serial});
    }
}

export default DiscountApi;