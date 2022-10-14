const siderbar = {
    '/': [
        {
            text: '快速开始',
            link: '/'
        },
        {
            text: '通用',
            children: [
                {
                    text: 'Button按钮',
                    link: '/component/button/'
                }
            ]
        },
        {
            text: '导航'
        },
        {
            text: '反馈'
        },
        {
            text: '数据录入'
        },
        {
            text: '数据展示'
        },
        {
            text: '布局'
        }
    ]
};

const config = {
    themeConfig: {
        siderbar
    }
}

export default config;