import { useAppDispatch } from "../../../app/hooks";
import { TokenProps } from "../../../types/header";
import useQuery from "../../../utils/query";
import { getToken } from '../../AppData/HSR/HSRData/HotelActions';

const Header: React.VFC = () => {
    const query = useQuery();
    let code = query.get("code");
    const dispatch = useAppDispatch();

    const data: TokenProps = {
        client_id: 'travel-hotel-fvduX3RknLOfIOFLBZi3vk6hfLnGqgbNYvEa',
        client_secret: 'Cd4TbzQRubA2I9LlTjs5f1zqcDevDDeNo3Xi',
        code: code ? code : '',
        grant_type: 'authorization_code',
        redirect_uri: 'https://local.tvld.tech:3500'
        // redirect_uri: 'tvld-travel://token'
    };

    const formUrlEncode = (str: string) => {
        return str.replace(/[^\d\w]/g, (char: string) => {
            return char === ' ' ? '+' : encodeURIComponent(char);
        });
    };

    const objKeys = Object.keys(data) as Array<keyof TokenProps>;
    const str = objKeys.map((key: keyof TokenProps) => {
        const val = data[key];
        return formUrlEncode(key) + '=' + formUrlEncode(val as string);
    }).join('&');

    const getJWT = () => {
        dispatch(getToken(str));
    };

    return (
        <div>
            <p onClick={getJWT}>Code: <b>{code}</b></p>
        </div >
    );
};

export default Header;