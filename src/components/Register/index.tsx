/**
 * src\components\Register\index.tsx
 */
import React from "react";
import "./style.scss";
import { NavbarFC } from "../Navbar";
import { FooterFC } from "../Footer";

export function RegisterFC(): React.JSX.Element {
    return (
        <>
            <NavbarFC></NavbarFC>
            <section className="form">
                <div className="register_forrm">
                    <div className="log">
                        <a className="btn btn-ghost text-xl">Metalmage<span>AI</span></a>
                    </div>
                    <div className="h">
                        <h1>Регистрация</h1>
                    </div>
                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label"><span>Имя пользователя</span>
                            <input type="email" className="input" placeholder="Имя пользователя<" />
                        </label>
                        <label className="label"><span>Email</span>
                            <input type="email" className="input" placeholder="Email" />
                        </label>

                        <label className="label"><span>Пароль</span>
                            <input type="password" className="input" placeholder="Пароль" />
                        </label>
                        <label className="label"><span>Подтвердите пароль</span>
                            <input type="password" className="input" placeholder="Подтвердите пароль" />
                        </label>

                        <button className="btn btn-neutral mt-4">Зарегистрироваться</button>
                        <div className="confirmation">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            <a className="text-center">Я принимаю условия условия и Политику конфеденциальности</a>
                        </div>
                        
                    </fieldset>
                </div>
            </section>
            <FooterFC/>
        </>
    );
};
