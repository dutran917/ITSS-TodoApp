import { LogoutOutlined } from "@ant-design/icons";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../interceptors/axiosInstance";
import { RootState } from "../../redux";
interface HeaderProps {
    handleLogout: () => void;
}
const Header = ({ handleLogout }: HeaderProps) => {
    const userLogin = useSelector((state: RootState) => state.user);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const uid = localStorage.getItem("uid");
        axiosInstance
            .get(`api/users/${uid}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [userLogin]);

    return (
        <div className={style.header}>
            <p className={style.appName}>TODO APP</p>
            <div className={style.userInfo}>
                <p>{user ? user.username : ""}</p>
                <LogoutOutlined
                    style={{ fontSize: "20px" }}
                    onClick={handleLogout}
                ></LogoutOutlined>
            </div>
        </div>
    );
};

export default Header;
