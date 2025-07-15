import React from "react";
import "./style.scss";
import { NavbarFC } from "src/components/Navbar";
import { FooterFC } from "src/components/Footer";

export function ActiveGenerateFC(): React.JSX.Element{

    return(
        <section className="generate">
            <NavbarFC/>
            <main className="active-generate">
                <article>
                    <h1>MetalmageAI</h1>
                    <p>1 базовая генерация = 1 PXL</p>
                </article>
                <div className="generate-progress form">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label"><span>Введите текст для генерации</span>
                            <input type="text" className="input" placeholder="" />
                        </label>
                        <div className="confirmation">
                            <label className="label">
                                <input type="checkbox" defaultChecked className="checkbox" />
                            </label>
                            <button className="btn btn-neutral mt-4">Генерировать</button>    
                        </div>
                        
                    </fieldset>
                </div>
                <div className="pictures">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Загрузите изображение для модификации или обработки</legend>
                        <label className="label">
                            <input type="file" className="file-input" />
                        </label>
                    </fieldset>
                </div>
                <div className="generate-idea">
                    <div className="generate-idea__getting"></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </main>
            <FooterFC/>
        </section>
    );
}
