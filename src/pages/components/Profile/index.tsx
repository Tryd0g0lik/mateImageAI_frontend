import React from "react";
import "./style.scss";
import { NavbarFC } from "src/components/Navbar";
import { FooterFC } from "src/components/Footer";

export function ProfileFC(): React.JSX.Element{

    return(
        <section className="profile">
            <NavbarFC/>
            <section className="form">
                <div className="register_form">
                    {/* FORM FOR THE INIT OF REGISTRATION */}
                    <div className="log">
                        <a className="btn btn-ghost text-xl">Metalmage<span>AI</span></a>
                    </div>
                    <div className="h">
                        <h1>Личный кабинет</h1>
                    </div>
                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label"><span>Имя пользователя</span>
                            <input type="text" className="input" placeholder="Имя пользователя" />
                        </label>
                        <label className="label"><span>Email</span>
                            <input type="email" className="input" placeholder="Email" />
                        </label>
                        
                        <button className="btn btn-neutral mt-4">Выйти</button>
                        <div><a>Изменить пароль</a> <a>Удалить аккаунт</a></div>
                        
                    </fieldset>
                </div> 
                <div className="balance">
                    <div className="balance_form register_form">
                        <div className="h">
                            <h2>Баланс</h2>
                        </div>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <label className="label">
                                <input   type="text" className="input" placeholder="" />
                            </label>
                            
                            <button className="btn btn-neutral mt-4">Пополнить</button>                        
                        </fieldset>
                    </div>
                    <div className="balance_form register_form">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <div className="generator"></div>
                            <button className="btn btn-neutral mt-4">Генерировать арт</button>                        
                        </fieldset>
                    </div>
                </div>
            </section>
            <FooterFC/>
        </section>
    );
}
