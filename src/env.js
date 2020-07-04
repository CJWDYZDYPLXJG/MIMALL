let baseURL;

switch (process) {
    case 'development':
        baseURL = 'http://dev-mall-pre,springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre,springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://prod-mall-pre,springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre,springboot.cn/api';
        break;
}


export default {
    baseURL
}