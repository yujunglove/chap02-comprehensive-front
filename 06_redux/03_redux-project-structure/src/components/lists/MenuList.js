import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { callGetMenuListAPI } from "../../api/MenuAPICalls";
import MenuItem from "../items/MenuItem";

function MenuList() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;

    console.log('result : ', result);

    useEffect(
        () => {
            /* menuList 호출 API */
             //menuList 호출 API -> store에 저장 -> 화면에 렌더링
            dispatch(callGetMenuListAPI());
        },
        []
    );
    
    return (
        <div className="menuBox">
            { menuList && menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
        </div>
    );
}

export default MenuList;