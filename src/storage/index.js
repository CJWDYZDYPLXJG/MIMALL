const STORAGT_KEY = 'mall';
export default {
    setItem(key, value, modle_name) {
        if (modle_name) {
            let val = this.getItem(modle_name);
            val[key] = value;
            this.setItem(modle_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGT_KEY, JSON.stringify(val));
        }

    },
    //获取模块属性
    getItem(key, modle_name) {
        if (module_name) {
            let val = this.getItem(modle_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem('STORAGT_KEY') || '{}');
    },
    clear(key, modle_name) {
        let val = this.getStorage();
        if (module_name) {
            delete val[modle_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGT_KEY, JSON.stringify(val));
    },
}