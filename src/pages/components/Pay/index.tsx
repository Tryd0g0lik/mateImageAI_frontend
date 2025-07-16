/**
 * src\pages\components\Pay\index.tsx
 */
import React from "react";
import "./style.scss";
import { NavbarFC } from "src/components/Navbar";
import { FooterFC } from "src/components/Footer";
import { TarifFC } from "src/components/Tarif";
export function PayFC(): React.JSX.Element {
    return(
    <section className="pay">
                <NavbarFC/>
                <section className="form">
                    <div className="register_form">
                        {/* FORM FOR THE INIT OF REGISTRATION */}
                        <div className="log">
                            <a className="btn btn-ghost text-xl">Metalmage<span>AI</span></a>
                            <p>1 базовая генерация = <span>1</span> PXL</p>
                            <p><span>1</span> PXL = <span>190</span>Т</p>
                        </div>
                        <div className="h">
                            <h1>пополнение баланса</h1>
                            <p>Выбирете подходящий тариф или настройте собственный</p>
                        </div>
                    </div> 
                    <div className="tarifs">
                        <div className="tarif_levels">
                            <div className="level">
                                <TarifFC levelTarif={""} pxl={0} currency={0} />
                            </div>
                            <div className="level">
                                <TarifFC levelTarif={""} pxl={0} currency={0} />
                                <button className="btn btn-neutral mt-4">+10 PXL бонус при покупке</button>
                            </div>
                            <div className="level">
                                <TarifFC levelTarif={""} pxl={0} currency={0} />
                                <button className="btn btn-neutral mt-4">+25 PXL бонус</button>
                            </div>
                            <div className="level">
                                <TarifFC levelTarif={""} pxl={0} currency={0} />
                                <button className="btn btn-neutral mt-4">+50 PXL бонус</button>
                            </div>
                        </div>
                    </div>
                    <div className="pay_form form">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <label className="label">
                                <input type="text"  className="input" />
                            </label>
                            <label className="label">
                                <input type="text" className="input" />
                            </label>

                            <label className="label">
                                <input type="email" className="input" />
                            </label>

                            <button className="btn btn-neutral mt-4">Оплатить</button>
                            <div className="confirmation">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <a className="text-center">Я принимаю условия испольщования</a>
                            </div>
                            
                        </fieldset>
                    </div>
                </section>
                <FooterFC/>
            </section>
    );
}
