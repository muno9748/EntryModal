console.log('원작자 muno9748');
console.log('https://github.com/muno9748/EntryModal 스타꾺꾺');
Entry.Modal = class EntryModal {
        constructor(id, data) {
                if(!id || id == 'auto') id = Entry.Utils.generateId();
                this.options = data || {};
                this.bodyID = `POPUP_BODY_${id}`;
                this.body = $(`<div class="popup_wrap__a65d5" id="POPUP_BODY_${id}">
                    <header class="pop_header__a65d5">
                        <h1 id="POPUP_TITLE">${data.title || '알림'}</h1>
                        <button class="btn_back__a65d5 imbtn_pop_back__a65d5" id="POPUP_CANCEL">
                            <span class="blind__a65d5">Menus.history_back</span>
                        </button>
                    </header>
                    <section class="extend_content__a65d5 pop_content__a65d5">
                        <div class="section_cont__a65d5">
                            <h2 class="blind__a65d5">BIG ICON LIST</h2>
                            <div class="cont_box__a65d5">
                                <div class="desc__a65d5" id="POPUP_DESCRIPTION_BODY">
                                    <div class="imico_exclamation_mark__a65d5"></div>
                                    <div class="content__a65d5" id="POPUP_DESCRIPTION">${data.description || ''}</div>
                                </div>
                                <div class="extend_block__a65d5">
                                    <ul class="list__a65d5" id="POPUP_ITEM_LIST">

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="pop_btn_box__a65d5">
                        <a href="#NULL" id="POPUP_CANCEL">${data.cancelButtonText || '취소'}</a>
                        <a href="#NULL" class="active__a65d5" id="POPUP_OK">${data.confirmButtonText || '확인'}</a>
                    </div>
                </div>`)[0];
                document.querySelector('.modal').style.setProperty('display', 'block');
                $('.modal .popup').append(this.body);
                this.options.events.readyEvent?.((key, value) => {
                        switch(key.toLowerCase()) {
                                case 'title': {
                                        this.body.querySelector('#POPUP_TITLE').innerText = value;
                                        return !0;
                                }
                                case 'setdescription': {
                                        this.body.querySelector('#POPUP_DESCRIPTION').innerText = value.value;
                                        return !0;
                                }
                                case 'hidedescription': {
                                        this.body.querySelector('#POPUP_DESCRIPTION_BODY').style.setProperty('display', 'none');
                                        return !0;
                                }
                                case 'addfield': {
                                        let node = $(`
                                        <li class="POPUP_ITEM">
                                            <div class="link__a65d5">
                                                <div class="thmb__a65d5" style="
                                                    background-repeat: no-repeat;
                                                    position: relative;
                                                    background-image: url(${value.background});
                                                    background-size: 120px;
                                                ">
                                                    <div class="sponser_text__a65d5" id="SPONSOR_MESSAGE_BODY">
                                                        <span class="sponser_text_span__a65d5" id="SPONSOR_MESSAGE_BODY">${value.sponsorMessage || ''}</span>
                                                    </div>
                                                </div>
                                                <div class="inner_box__a65d5">
                                                    <strong class="sjt__a65d5" id="Item_Title">${value.title || ''}</strong>
                                                    <div class="dsc__a65d5" id="Item_Description">${value.desc || ''}</div>
                                                </div>
                                            </div>
                                        </li>`.trim())[0];
                                        node.querySelector('#SPONSOR_MESSAGE_BODY').style.setProperty('display', 'none');
                                        if(value.showSponsor || value.sponsorMessage) node.querySelector('#SPONSOR_MESSAGE_BODY').style.setProperty('display', 'block');
                                        node.addEventListener('click', () => {
                                                node.classList.toggle('on__a65d5');
                                                value.clickEvent?.(node);
                                        }, false);
                                        this.body.querySelector("#POPUP_ITEM_LIST").appendChild(node);
                                        return node;
                                }
                                default: {
                                        return !1;
                                }
                        }
                }, this.body);
                if(!data.description) this.body.querySelector('#POPUP_DESCRIPTION_BODY').style.setProperty('display', 'none');
                Array.from(this.body.querySelectorAll('#POPUP_CANCEL')).forEach(el => {
                        el.addEventListener('click', (() => {
                                this.options.events.closeEvent?.(Array.from(this.body.querySelectorAll('.POPUP_ITEM.on__a65d5')), this.body);
                                document.querySelector('.modal').style.setProperty('display', 'none');
                                this.body.remove();
                                this.body = null;
                        }), false);
                });
                this.body.querySelector('#POPUP_OK').addEventListener('click', (() => {
                        this.options.events.confirmEvent?.(Array.from(this.body.querySelectorAll('.POPUP_ITEM.on__a65d5')), this.body, () => {document.querySelector('.modal').style.setProperty('display', 'none');this.body.remove();});
                }), false);
        }
}
