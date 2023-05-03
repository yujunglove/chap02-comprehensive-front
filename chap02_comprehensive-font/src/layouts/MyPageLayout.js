import { Outlet } from "react-router-dom";
import MyPageNavbar from "../components/common/MyPageNavbar";
import MyPageLayoutCSS from '../components/common/MyPageNavbar.module.css';

function MyPageLayout() {
    return (
        <div className="MyPageLayoutCSS.myPageLayout ">
            <main>
                <Outlet>

                </Outlet>
            </main>

        </div>
    )
}

export default MyPageLayout;