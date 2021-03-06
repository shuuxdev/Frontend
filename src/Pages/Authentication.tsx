import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import React, { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartProvider";
import { GlobalContext } from "../Contexts/GlobalContext";

const Authentication: React.FC<{}> = () => {
    interface IUserRegister {
        username: string;
        password: string;
        email: string;
        first_name: string;
        last_name: string;
        phone?: string;
    }
    interface IUserLogin {
        username: string;
        password: string;
    }

    const emptyUserRegister: IUserRegister = {
        password: "",
        email: "",
        username: "",
        first_name: "",
        last_name: "",
    }
    const emptyUserLogin: IUserLogin = {
        username: "",
        password: ""
    }

    const [userRegisterData, setUserRegisterData] = useState<IUserRegister>(emptyUserRegister)

    const [userLoginData, setUserLoginData] = useState<IUserLogin>(emptyUserLogin);

    const [mode, setMode] = useState("signIn");


    const { login: dialog, setLogin: setDialog } = useContext(GlobalContext)


    const [formAlert, setFormAlert] = useState<{ state: "success" | "failed", show: boolean, content?: string }>({ state: "success", show: false });

    const { updateCart } = useContext(CartContext)

    const loginAndUpdateCart = () => {
        setDialog(false);
        updateCart();
    }

    const submitForm = (mode: string) => {
        switch (mode) {
            case "signIn":
                console.log(userLoginData);
                fetch("/api/user/login", { method: "POST", body: JSON.stringify(userLoginData), headers: { 'Content-Type': 'application/json' } })
                    .then(res => {
                        console.log(res.status)
                        switch (res.status) {
                            case 200:
                                loginAndUpdateCart()
                                break;
                            default:
                                setFormAlert({ state: "failed", show: true, content: "????ng nh???p th???t b???i" })
                                break;
                        }
                    })
                break;
            case "signUp":
                console.log(userRegisterData);

                fetch("/api/user/signup", { method: "POST", body: JSON.stringify(userRegisterData), headers: { 'Content-Type': 'application/json' } })
                    .then(res => {
                        console.log(res.status)
                        switch (res.status) {
                            case 200:
                                loginAndUpdateCart()

                                break;
                            default:
                                setFormAlert({ state: "failed", show: true, content: "????ng k?? th???t b???i" })
                                break;
                        }
                    })
                break;
        }
    }
    return (
        <div className="authentication">
            <Dialog visible={dialog} style={{ width: '450px' }} header={mode == "signIn" ? "????ng nh???p" : "????ng k??"} className="p-fluid" onHide={() => setDialog(false)}>
                <React.Fragment>

                    {(mode === "signUp") &&
                        <React.Fragment>
                            <div className="p-field">
                                <label htmlFor="code">T??n t??i kho???n</label>
                                <InputText autoFocus id="code" value={userRegisterData.username} onChange={(e) => setUserRegisterData({ ...userRegisterData, username: e.target.value })} />

                            </div>
                            <div className="p-field">
                                <label htmlFor="code">M???t kh???u</label>
                                <InputText autoFocus id="code" value={userRegisterData.password} onChange={(e) => setUserRegisterData({ ...userRegisterData, password: e.target.value })} />
                            </div>
                            <div className="p-field">
                                <label htmlFor="code">Email</label>
                                <InputText autoFocus id="code" value={userRegisterData.email} onChange={(e) => setUserRegisterData({ ...userRegisterData, email: e.target.value })} />
                            </div>
                            <div className="p-grid">
                                <div className="p-col">
                                    <div className="p-field">
                                        <label htmlFor="code">H???</label>
                                        <InputText autoFocus id="code" value={userRegisterData.first_name} onChange={(e) => setUserRegisterData({ ...userRegisterData, first_name: e.target.value })} />
                                    </div>

                                </div>
                                <div className="p-col">
                                    <div className="p-field">
                                        <label htmlFor="code">T??n</label>
                                        <InputText autoFocus id="code" value={userRegisterData.last_name} onChange={(e) => setUserRegisterData({ ...userRegisterData, last_name: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-field">
                                <span>???? c?? c?? t??i kho???n ? <a href="#" onClick={() => setMode("signIn")}>????ng nh???p</a></span>
                            </div>
                            <div className="p-field">
                            </div>

                        </React.Fragment>
                    }
                    {(mode === "signIn") &&
                        <React.Fragment>
                            <div className="p-field">
                                <label htmlFor="code">T??n t??i kho???n</label>
                                <InputText autoFocus id="code" value={userLoginData.username} onChange={(e) => setUserLoginData({ ...userLoginData, username: e.target.value })} />

                            </div>
                            <div className="p-field">
                                <label htmlFor="code">M???t kh???u</label>
                                <InputText autoFocus id="code" value={userLoginData.password} onChange={(e) => setUserLoginData({ ...userLoginData, password: e.target.value })} />
                            </div>
                            <div className="p-field">
                            </div>
                            <div className="p-field">
                                <span>Ch??a c?? c?? t??i kho???n ? <a href="#" onClick={() => setMode("signUp")}>????ng k??</a></span>
                            </div>
                        </React.Fragment>

                    }
                    {
                        formAlert.show &&
                        <div className="p-field">
                            <span style={{ color: "#22c55e" }}>{formAlert.content}</span>
                        </div>
                    }
                    <Button onClick={() => submitForm(mode)}>{mode === "signIn" ? "????ng nh???p" : "????ng k??"}</Button>
                </React.Fragment>
            </Dialog>
        </div>

    );

}
export default Authentication;