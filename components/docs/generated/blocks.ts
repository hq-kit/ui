type Block = {
    name: string;
    deps?: string[];
    components?: Block[];
};

export const blocks: Block[] = [
    {"name":"auth-form-classic"},
    {"name":"auth-form-full"},
    {"name":"auth-form-modern"},
    {"name":"auth-form-overlay"},
    {"name":"auth-form-split"},
    {"name":"chatting-app","components":[{"name":"'components/chatting-app/bubble-chat'"},{"name":"'components/chatting-app/contact-list'"},{"name":"'components/chatting-app/message-form'"}],"deps":["components/chatting-app/bubble-chat","components/chatting-app/contact-list","components/chatting-app/message-form","react-aria"]},
    {"name":"dashboard","deps":["motion"]},
    {"name":"file-manager","components":[{"name":"'components/file-manager/file-list'"}],"deps":["components/file-manager/file-list"]},
    {"name":"product-management","components":[{"name":"'components/paginator'"}],"deps":["use-debounce","components/paginator"]},
    {"name":"user-profile","components":[{"name":"'components/user-profile/about'"},{"name":"'components/user-profile/media'"},{"name":"'components/user-profile/posts'"}],"deps":["next/image","components/user-profile/about","components/user-profile/media","components/user-profile/posts"]},
    {"name":"user-setting","components":[{"name":"'components/user-setting/account-setting'"},{"name":"'components/user-setting/danger-area'"},{"name":"'components/user-setting/plan-billing-setting'"},{"name":"'components/user-setting/security-setting'"}],"deps":["components/user-setting/account-setting","components/user-setting/danger-area","components/user-setting/plan-billing-setting","components/user-setting/security-setting"]}
]