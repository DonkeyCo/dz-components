import { LitElement, html, css } from 'lit-element'

import appstore from './resources/appstore/appstore_us.svg';
import playstore from './resources/playstore/en_playstore.svg';

export class AppLabel extends LitElement {
    static get properties() {
        return {
            width: { type: String },
            height: { type: String },
            playstoreUrl: { type: String },
            appstoreUrl: { type: String },
            target: { type: String },
            oneLine: { type: Boolean },
        }
    }
    
    constructor() {
        super();
        this.width = "150px";
        this.height = "150px";
        this._width = this.width.replace(/[a-zA-Z%]/g, "");
        this._unit = this.width.replace(/[0-9]/g, "");
        this.playstoreUrl = "https://play.google.com/";
        this.appstoreUrl = "https://www.apple.com/ios/app-store/";
        this.target = "_blank";
        this.oneLine = false;
    }

    static get styles() {
        return css`
            .wrapper {
                display: flex;
            }
        `;
    }

    render() {
        return html`
            <div class="wrapper" style="flex-direction: ${this.oneLine ? "row": "column"}">
                ${this.oneLine ? this.renderOneLiner() : this.renderStacked()}
            </div>
        `;
    }

    renderOneLiner() {
        return html`
            <div style="height: ${this.height}">
                <a href="${this.playstoreUrl}" target="${this.target}">
                    <img src="${playstore}" height="100%" />
                </a>
            </div>
            <div></div>
            <div style="height: ${this.height}">
                <a href="${this.appstoreUrl}" target="${this.target}">
                    <img src="${appstore}" height="100%" style="padding: 6%; box-sizing: border-box"/>
                </a>
            </div>
        `;
    }

    renderStacked() {
        return html`
            <div style="width: ${this.width};">
                <a href="${this.playstoreUrl}" target="${this.target}">
                    <img src="${playstore}" width="100%" />
                </a>
            </div>
            <div></div>
            <div style="width: ${this.width};">
                <a href="${this.appstoreUrl}" target="${this.target}">
                    <img src="${appstore}" width="100%" style="padding: 6%; box-sizing: border-box"/>
                </a>
            </div>
        `;
    }
};

window.customElements.define("dz-applabel", AppLabel);